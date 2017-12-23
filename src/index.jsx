import React from 'react';
import ReactDOM from 'react-dom';
import Days from './days.js';
const localDate = new Date();
const localDay = localDate.getDate();

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list: [],
      currentDay: localDay,
    }
  }

  componentDidMount(){
    this.getDayServer();
  }

  getDayServer(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://reports.larek.pro/api/the-village-calendar-2018/currentday.php', true);
    xhr.send(null);
    xhr.onload = r => {
      if(r.currentTarget.status == 200){
        let response = JSON.parse(r.currentTarget.response);
        console.log(response);
        this.setState({currentDay : response.currentDay});
      }else{
        throw 'Error with getting server day';
      }
    }
  }

  redirect(url){
    window.location = url;
  }

  change(e){
    let clickDay = e.currentTarget;
    if(clickDay.dataset.display == "visible" && clickDay.dataset.status == "close"){
      //Change status of block
      clickDay.dataset.status = 'open';
      
      //Recored to localStorage
      if(window.localStorage){
        localStorage.setItem(clickDay.dataset.day, 'open');
      }
      
      // Replace children in block
      let children = clickDay.children;
      children[0].classList.toggle('transparent');
      children[1].classList.toggle('transparent');
    }
  }

  render(){
    return(
        <div>
          {
            Days.map(item => {
              return(
                  <div className="col-4">
                      <div id='cf2' onClick={this.change.bind(this)} data-display={item.day > this.state.currentDay ? 'lock' : 'visible'} data-status={window.localStorage && localStorage[item.day] ? 'open' : 'close'} data-day={item.day}>
                        { item.day > this.state.currentDay ? <img src="http://reports.larek.pro/api/the-village-calendar-2018/images/lock.svg" className="lock" alt=""/> : '' }
                        <img id="front" src={"http://reports.larek.pro/api/the-village-calendar-2018/images/day-" + item.day + ".svg"} className={window.localStorage && localStorage[item.day] ? 'transparent' : ''} />
                        <img id="back" onClick={this.redirect.bind(this, item.link)} src={item.day > 24 ? 'http://placehold.it/200x200' : "http://reports.larek.pro/api/the-village-calendar-2018/images/day-" + item.day + "-back.svg"} className={window.localStorage && localStorage[item.day] ? '' : 'transparent'} />
                        {
                          item.day == this.state.currentDay ? <img src="http://reports.larek.pro/api/the-village-calendar-2018/images/rays.svg" style={{width:'100%', position: 'absolute', margin: '-30px 0px', zIndex: '-1'}} className='rays' alt=""/> : ''
                        }
                      </div>
                  </div>
                );
            })
          }
        </div>
      )
  }
}

let ww = window.innerWidth;
let k = ww < 1280 ? ww < 1040 ? 17 : 13 : 12;
let backgroundMargin = ww / k;
document.body.style.backgroundPosition = "0px " + " "+ -backgroundMargin + "px";

ReactDOM.render(<App />, document.getElementById('calendar-app'));
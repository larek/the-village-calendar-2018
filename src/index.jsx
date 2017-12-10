import React from 'react';
import ReactDOM from 'react-dom';
import Days from './days.js';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list: []
    }
  }

  redirect(url){
    window.open(url, '_blank');
  }

  change(e){
    let clickDay = e.currentTarget;
    if(clickDay.dataset.display == "visible"){
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
                      <div id='cf2' onClick={this.change.bind(this)} data-display={item.day > 15 ? 'lock' : 'visible'}>
                        { item.day > 15 ? <img src="http://reports.larek.pro/api/the-village-calendar-2018/images/lock.svg" className="lock" alt=""/> : '' }
                        <img id="front" src={"http://reports.larek.pro/api/the-village-calendar-2018/images/day-" + item.day + ".svg"} />
                        <img id="back" onClick={this.redirect.bind(this, item.link)} src={"http://reports.larek.pro/api/the-village-calendar-2018/images/day-" + item.day + "-back.svg"} className='transparent' />
                        {
                          item.day == 15 ? <img src="http://reports.larek.pro/api/the-village-calendar-2018/images/rays.svg" style={{width:'100%', position: 'absolute', margin: '-30px 0px', zIndex: '-1'}} className='rays' alt=""/> : ''
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
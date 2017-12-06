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

  change(e){
    if(e.currentTarget.dataset.display == "visible"){
      console.log(2);
      let children = e.currentTarget.children;
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
                        <img id="back" src="http://reports.larek.pro/api/the-village-calendar-2018/images/day-11-back.svg" className='transparent' />
                      </div>
                  </div>
                );
            })
          }
        </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('calendar-app'));
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props){
    super(props)
  }

  change(e){
    console.log(e);
    let children = e.currentTarget.children;
    children[0].classList.toggle('transparent');
    children[1].classList.toggle('transparent');
  }

  render(){
    return(
          <div className="section group">
            <div className="col span_1_of_3">
              <div id="cf2" className="shadow" onClick={this.change.bind(this)} data-day='11'>
              <img id="front" src="http://reports.larek.pro/api/the-village-calendar-2018/images/day-11.svg" className='img-fluid' />
              <img id="back" src="http://reports.larek.pro/api/the-village-calendar-2018/images/day-11-back.svg" className='img-fluid transparent' />
              </div>
            </div>
            <div className="col span_1_of_3">
              <div id="cf2" className="shadow" data-day='12'>
              <img id="front" src="http://reports.larek.pro/api/the-village-calendar-2018/images/day-12.svg" className='img-fluid' />
              <img id="back" src="http://reports.larek.pro/api/the-village-calendar-2018/images/day-11-back.svg" className='img-fluid transparent' />
              </div>
            </div>
            <div className="col span_1_of_3">
              <div id="cf2" className="shadow" data-day='13' data-lock>
              <img id="front" src="http://reports.larek.pro/api/the-village-calendar-2018/images/day-13.svg" className='img-fluid' />
              <img id="back" src="http://reports.larek.pro/api/the-village-calendar-2018/images/day-11-back.svg" className='img-fluid transparent' />
              <img src="http://reports.larek.pro/api/the-village-calendar-2018/images/lock.svg" className='lock' alt="" />
            </div>
          </div>
          </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('calendar-app'));
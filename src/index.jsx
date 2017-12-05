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

  componentDidMount(){
    console.log(Days);
  }

  change(e){
    if(!e.currentTarget.dataset.lock){
      let children = e.currentTarget.children;
      children[0].classList.toggle('transparent');
      children[1].classList.toggle('transparent');
    }
  }

  render(){
    return(
        <div className="stk-grid" data-ce-tag="grid">
          {
            Days.map(item => {
              return(
                  <div className="stk-grid-col" data-ce-tag="grid-col" data-col-width="2">
                      <div id="cf2" className="shadow" onClick={this.change.bind(this)} >
                        <img id="front" src={"http://reports.larek.pro/api/the-village-calendar-2018/images/day-" + item.day + ".svg"} className='img-fluid' />
                        <img id="back" src="http://reports.larek.pro/api/the-village-calendar-2018/images/day-1-back.svg" className='img-fluid transparent' />
                      </div>
                  </div>
                );
            });
          }
        </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('calendar-app'));
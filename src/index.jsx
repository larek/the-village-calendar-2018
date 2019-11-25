import React from 'react';
import ReactDOM from 'react-dom';
import Days from './days.js';
import './style.css';
const localDate = new Date();
const localDay = localDate.getDate();

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      currentDay: localDay,
    }
  }

  componentDidMount() {
    this.getDayServer();
  }

  getDayServer() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://the-village-calendar.larek.pro/currentday.php', true);
    xhr.send(null);
    xhr.onload = r => {
      if (r.currentTarget.status == 200) {
        let response = JSON.parse(r.currentTarget.response);
        this.setState({ currentDay: response.currentDay });
      } else {
        throw 'Error with getting server day';
      }
    }
  }

  redirect(url) {
    window.location = url;
  }

  change(e) {
    let clickDay = e.currentTarget;
    if (clickDay.dataset.display == "visible" && clickDay.dataset.status == "close") {
      //Change status of block
      clickDay.dataset.status = 'open';

      //Recored to localStorage
      if (window.localStorage) {
        localStorage.setItem(clickDay.dataset.day, 'open');
      }

      // Replace children in block
      let children = clickDay.children;
      children[0].classList.toggle('transparent');
      children[1].classList.toggle('transparent');
    }
  }

  render() {
    return (
      <div>
        {
          Days.map((item, key) => {
            return (
              <div key={key} className="col-4">
                <div id="cf2">
                  <img onClick={this.redirect.bind(this, item.link)} src={"https://the-village-calendar.larek.pro/images/day-" + item.day + "-back.svg"} className='image-fluid' alt="" />
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
document.body.style.backgroundPosition = "0px " + " " + -backgroundMargin + "px";

ReactDOM.render(<App />, document.getElementById('calendar-app'));

import { Component } from "react";
import project1 from "../img/weather.jpg";
import project2 from "../img/chat.png";
import project3 from "../img/project3.png";
import project4 from "../img/e-commerce.jpg";

class Portfolio extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Work</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
        <div class="port_out port1">
          <div class="port_in">
            <a href="https://ankit07-weather-app.herokuapp.com/" target="blank">
              <img src={project1} className="po1" alt="Weather-app"></img>
            </a>
          </div>
        </div>
        <div class="port_out port2">
          <div class="port_in">
            <a href="https://ankit07-chat-app.herokuapp.com/" target="blank">
              <img src={project2} className="po1" alt="Let's chat app"></img>
            </a>
          </div>
        </div>
        <div class="port_out port3">
          <div class="port_in">
            <a href="#">
              <img src={project3} className="po1" alt="To do list"></img>
            </a>
          </div>
        </div>
        <div class="port_out port4">
          <div class="port_in">
            <a href="#">
              <img
                src={project4}
                className="po1"
                alt="E-commerce website"
              ></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;

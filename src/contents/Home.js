import { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/profile_photo.jpg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1>
          Ankit <mark >Kumar</mark>
        </h1>
        <ReactTypingEffect
          className="typingeffect"
          text={[
            "A MERN Stack Developer",
            "A Daily Coder",
            "A Chess Lover❤",
          ]}
          speed={50}
          eraseSpeed={50}
          typingDelay={200}
          eraseDelay={200}
        />
        <div className="hr_line">
          <div className="hr_inner"></div>
        </div>
        <Social />
      </div>
    );
  }
}

export default Home;

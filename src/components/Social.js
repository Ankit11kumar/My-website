import { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div class="social">
        <a
          class="btnsame btn1"
          href="https://github.com/Ankit11kumar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-github"></i>
        </a>
        <a
          class="btnsame btn2"
          href="https://twitter.com/Ankit__97"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-twitter"></i>
        </a>
        <a
          class="btnsame btn3"
          href="https://www.linkedin.com/in/ankitkumar97/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-linkedin"></i>
        </a>
        <a
          class="btnsame btn4"
          href="https://www.quora.com/profile/Ankit-Kumar-2091"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-quora"></i>
        </a>
      </div>
    );
  }
}

export default Social;

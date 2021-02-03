import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">About Me</h1>
        <div className="hr_line line2">
          <div className="inner2"></div>
        </div>
        <h2 className="abouthead">
          Ankit <mark className="mark2">Kumar</mark>
        </h2>
        <p>MERN Stack Developer</p>
        <br></br>
        <p className="p10">
          I’m 23 years old, a web-developer by profession, pursued my Computer
          Science and Engineering from SKIT, Jaipur. I am skilled in
          web-development using MERN stack. Have worked on many small to medium
          sized projects in my previous company, on both frontend and backend. I
          have experience with many AWS services too. Apart from
          development, I have sound knowledge of data structures and algorithms.
          In my free time, I like playing chess, reading books or just going on a walk.
        </p>
        <div className="Edu">
          <div class="back1 back2">
            <i class="fa fa-book i1 i3"></i>
          </div>
        </div>
        <h3>Education</h3>
        <div className="vr_line">
          <div className="vr_inner inn1"></div>
          <div className="vr_inner inn2"></div>
        </div>
        <h4>B.Tech in CSE</h4>
        <p className="p1">SKIT, Jaipur</p>
        <p className="p1">
          <i class="fa fa-calendar i2"></i>May 2016 - 2020
        </p>
        <h4>High School</h4>
        <p className="p1">Netaji Defence Academy</p>
        <p className="p1">
          <i class="fa fa-calendar i2"></i>May 2014
        </p>

        <h3 class="sk_head">Skills</h3>
        <div class="sk">React</div>
        <div class="sk s2">Node</div>
        <div class="sk s3">Mysql</div>
        <div class="sk s4">Javascript</div>
        <div class="sk s5">C++</div>
        <div class="sk s6">DSA</div>
      </div>
    );
  }
}

export default About;

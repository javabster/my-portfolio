import React, {Component, View, Image} from 'react';
import '../Styles/homepageStyle.css';
import {StickyContainer, Sticky} from 'react-sticky';
import StickyHeader from 'react-sticky-header';
import Graph from './Graph.js';
import ReactGA from 'react-ga';

var $ = require ('jquery');
// var Button = require('react-button');

class Homepage extends Component {

constructor(props) {
    super(props);
    ReactGA.initialize('UA-127577148-1');
    ReactGA.pageview('my-portfolio/src/Components/Homepage');
  }

handleGitHubClick() {
  window.open('https://github.com/javabster', '_blank');
}

handleLinkedInClick() {
  window.open('https://www.linkedin.com/in/abby-mitchell/', '_blank');
}


render() {
  return(
    <div>
      <head>
       <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Nanum+Gothic|Pacifico|Roboto" rel="stylesheet"/>
      </head>
      <div className="page1" id="home">
        <img className="coding-img" src={require('../Images/coding.jpeg')}></img>
        <div className="page1-items-container">
          <h1 className="name">Abby Mitchell</h1>
          <h2 className="tagline">UCL undergraduate student. Aspiring web developer. Interdisciplinary individual.</h2>
          <div className="button-box">
            <button onClick={this.handleLinkedInClick} className="button">LinkedIn</button>
            <button onClick={this.handleGitHubClick} className="button">GitHub</button>
          </div>
          <div className="scroll-container">
            <h2 className="scroll-sign">scroll for more</h2>
            <div className="arrow">^</div>
          </div>
        </div>
      </div>
      <div className="page2" id="aboutMe">
          <h1 className="h1" >About Me</h1>
          <div className="about-box">
          <div className="about-para">
            <p>University College London undergraduate student, studying BASc Arts and Sciences.</p>
            <p>On track for a First Class Honours degree classification, due to graduate June 2019.</p>
            <p>Currently undertaking a study abroad year at Shanghai Jiao Tong University, China.</p>
            <p>While studying abroad I am taking intensive Mandarin classes and working to build
            my web development skills.</p>
            <p>Experience working as a web developer intern for start-ups, mainly using JavaScript
            (particularly React and React Native frameworks).</p>
            </div>
            <img className="profile-pic" src={require('../Images/profile.png')}></img>
          </div>
      </div>
      <div className="page3" id="academicBackground">
        <img className="ucl-img" src={require('../Images/ucl.jpg')}></img>
        <div className="page3-items-container">
        <h1 className="h1">Academic Background</h1>
        <h2 className="h2">I am often asked by colleagues and recruiters 'what exactly is your degree?',
        so here is a basic breakdown of courses and modules I take as part of my undergraduate study across
        a range of departments</h2>
        <div className="circle-flexbox">
          <div className="circle-container">
            <img className="benzene-svg" src={require('../Images/benzene.svg')}></img>
            <div className="circle-overlay">
              <div className="circle-text">A range of Organic Chemistry modules from the Chemistry Department.</div>
            </div>
          </div>
          <div className="circle-container">
            <div className="coding-symbol">&lt; / &gt;</div>
            <div className="circle-overlay">
              <div className="circle-text">Various Computer Science modules and projects. 
              Primarily Java and Python focused.</div>
            </div>
          </div>
          <div className="circle-container">
            <img className="globe-svg" src={require('../Images/globe.svg')}></img>
            <div className="circle-overlay">
              <div className="circle-text">Non-scientific courses with an international focus.
              International Law and International Relations, for example.</div>
            </div>
          </div>
          </div>
          <div className="circle-flexbox">
          <div className="circle-container">
            <img className="zhong-svg" src={require('../Images/zhong.svg')}></img>
            <div className="circle-overlay">
              <div className="circle-text">Mandarin Chinese. Weekly language classes at UCL and
              one year Intensive Mandarin at Shanghai Jiao Tong University.</div>
            </div>
          </div>
          <div className="circle-container">
            <img className="handshake-svg" src={require('../Images/handshake.svg')}></img>
            <div className="circle-overlay">
              <div className="circle-text">A variety of core modules with a focus on
              collaborative project work.</div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="page4">
        <h1 className="h1">Study Abroad</h1>
        <div className="page4-items-container">
          <div className="study-abroad-para"><p>As part of my degree I am currently undertaking a study abroad year in
          Shanghai, China. My primary academic aim for this year is to undertake an intensive Mandarin
          study programme at Shanghai Jiao Tong University.</p>
          <p> This involves taking modules in Speaking, Reading and Listening; as well as an 
          optional Business Chinese module.</p>
          <p>See here a graphical representation of my grades from the past 6 months (because graphs 
            are cool and I like graphs).</p></div>
          <Graph></Graph>
        </div>
        </div>
      </div>
    );
}

}

export default Homepage;

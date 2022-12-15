/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React from 'react';
import vanessa from '../../components/images/Vanessa_Bonito.png';
import aron from '../../components/images/Aron.png';
import jean from '../../components/images/Jean_Bulambo.png';
import chuma from '../../components/images/chuma.png'
import './about.css';

const About = () => (
  <div className="about-container">
    <h1 className="about-h1">About</h1>
    <p className="about-p">A pet hotel, also known as a pet resort or luxury animal kennel, is an upscale facility that tends to the needs of clients’ pets, while they are out of town. Most pet hotel owners personally enjoy the company of animals and understand their needs.This is an app to find the perfect hotel for your pet.</p>
    <h3 className="about-h1">Authors</h3>
    <div className="card-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={vanessa} className="author-img" />
          </div>
          <div className="flip-card-back">
            <h5>Vanessa Bonito</h5>
            <p>Remote full-stack software developer, passionate about JavaScript.</p>
            <p>I help homeless dogs in my free time. Open to new opportunities.</p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={aron} className="author-img" />
          </div>
          <div className="flip-card-back">
            <h5>Aron Abraham</h5>
            <p>Full-stack software developer, passionate about Tech, Rails enthusiast.</p>
            <p>I love pets. Open to new opportunities.</p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={jean} className="author-img" />
          </div>
          <div className="flip-card-back">
            <h5>Jean Bulambo </h5>
            <p>I am a Full-Stack developer</p>
            <p>I love traveling and I am looking for new opportunities.</p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={chuma} className="author-img" />
          </div>
          <div className="flip-card-back">
            <h5>Achike Chuma Edward</h5>
            <p>Full-stack/Mobile developer with love for React, Node, Python, Android and IOS development.</p>
            <p> I enjoy playing football and dressing up like Bond. Open to new opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;

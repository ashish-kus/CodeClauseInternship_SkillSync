
import React, { useEffect } from "react";
import "./styles/hero.css";
import $ from "jquery";

const Hero = () => {
  useEffect(() => {
    var num = 0;
    const interval = setInterval(function() {
      num++;
      var classes = ["", "out", "ready"];
      $('#watch').removeClass();
      $('#watch').addClass(classes[num % 3])
      $('#phone').removeClass();
      $('#phone').addClass(classes[(num + 2) % 3]);
      $('#laptop').removeClass();
      $('#laptop').addClass(classes[(num + 1) % 3]);
      $('.quote span').removeClass();
      $('.quote span:nth-child(' + (num % 3 + 1) + ')').addClass('highlight');
    }, 900);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="artboard">
        <div id="watch">
          <div id="crown"></div>
          <div id="button"></div>
          <div id="band-up"></div>
          <div id="band-bottom"></div>
          <div id="outline">
            <div id="screen"></div>
          </div>
        </div>
        <div id="phone" className="ready">
          <div id="outline">
            <div id="screen"></div>
          </div>
          <div id="home"></div>
          <div id="camera"></div>
          <div id="sensor"></div>
          <div id="speaker"></div>
          <div id="lock"></div>
          <div id="silent"></div>
          <div id="volume-up"></div>
          <div id="volume-down"></div>
        </div>
        <div id="laptop" className="out">
          <div id="outline">
            <div id="screen"></div>
          </div>
          <div id="keyboard"></div>
          <div id="notch"></div>
          <div id="back"></div>
          <div id="camera"></div>
        </div>
      </div>
      <div className="quote">
        <span className="highlight">Apple's<br /></span>
        <span>conquering<br /></span>
        <span>my life.</span>
      </div>
    </div>
  );
};

export default Hero;


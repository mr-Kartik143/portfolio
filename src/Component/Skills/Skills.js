import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="container mainbox" id="skills">
      <h1 className="mt-5 text-center text-danger skilltxt">Skills</h1>
      <h6 className="m-2 text-light text-center txt1">What I Know</h6>
      <div className="txtbox">
        <h4 className="m-2 text-danger logtxt">My Creative</h4>
        <h4 className="m-2 text-light logtxt2">Skills</h4>
        <h4 className="m-2 text-danger logtxt">&</h4>
        <h4 className="m-2 text-light logtxt2">Experiences</h4>
      </div>
      <p className="text-light mx-5 mt-4 mb-5 para">
        Hello All I Have many skills in my armory. I am perfect at HTML and CSS
        and BOOTSTRAP and JAVASCRIPT and REACT JS and MONGODB and EXPRESS and
        NODE JS and FIREBASE. I use primarily those languages and 1 frame-work to build,
        design and develop any website. I also know JAVASCRIPT and also used it
        to make website look cool. I have also worked with DATABASE so i also
        have knowledge of those also I have connnected 2 website to database
        that both were working properly. I am also expert at UI design
      </p>
      <div className="mb-5">
      <label className="mx-5 text-light ffont">HTML</label>
      <div
        className="progress mx-5"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bar ffont">95%</div>
      </div>
      <label className="mx-5 text-light ffont mt-4">CSS</label>
      <div
        className="progress mx-5"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bar2 ffont">90%</div>
      </div>
      <label className="mx-5 text-light ffont mt-4">BOOTSTRAP</label>
      <div
        className="progress mx-5"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bar3 ffont">85%</div>
      </div>
      <label className="mx-5 text-light ffont mt-4">JAVASCRIPT</label>
      <div
        className="progress mx-5"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bar4 ffont">90%</div>
      </div>
      <label className="mx-5 text-light ffont mt-4">JAVA</label>
      <div
        className="progress mx-5"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bar5 ffont">70%</div>
      </div>
      <label className="mx-5 text-light ffont mt-4">C</label>
      <div
        className="progress mx-5"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bar6 ffont">75%</div>
      </div>


      </div>
    </div>
  );
}

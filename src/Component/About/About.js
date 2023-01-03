import React from "react";
import "./About.css";

export default function About() {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="container aboutbox about">
      <h1 className="mt-5 text-center text-danger abouttxt">About Me</h1>
      <h6 className="m-3 text-light text-center txt1">Who I Am</h6>
      <div className="box">
        <div className="b2">
          <h2 className="my-2 mt-4 mx-5 text-light ffont">I am Kartik.</h2>
          <h2 className="mt-2 mx-5 text-danger ffont">I'm A Web Developer.</h2>
          <p className="text-light mx-5 mt-2 mb-3 para">
            Hello I'm Professional Full Stack MERN Developer. I have mastered
            technologies like HTML, CSS, BOOTSTRAP, JAVASCRIPT, MONGODB,
            EXPRESS, REACT, NODE JS.Turning your dream website into reality is
            my job. I'm looking for remote work / Internship for Frontend /
            Backend Web Developer Position.I don't just create websites, I
            create websites that promote you / your business to world
            24x7.Responsive Web Design always plays an important role so I
            Believe in quality over quantity.
          </p>
          <button
            type="button"
            className="btn btn-danger mx-5 mb-5 mt-3"
            onClick={onButtonClick}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

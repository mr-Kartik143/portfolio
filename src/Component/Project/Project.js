import React from "react";
import "./Project.css";

export default function Project() {
  return (
    <div className="container projectbox" id="project">
      <h1 className="mt-5 text-center text-danger abouttxt">My Project</h1>
      <h6 className="my-3 text-light text-center txt1">What I Do</h6>
      <div className="mx-5 mb-5 mt-4">
         <ul>
          <li className="text-light ffont mb-3">
            PortFolio Website -{" "}
            <span className="text-light rfont mx-2">
              A portfolio website is a unique way to showcase your work and let
              others know about yourself.
            </span>
          </li>
          <p className="text-light ffont">
            Duration - <span className="rfont">Two Months</span>
          </p>
          <p className="text-light ffont">
            Technologies Used -{" "}
            <span className="rfont">
              React, Javascript, Html, Css, Bootstrap
            </span>
          </p>
          <p className="text-light ffont">
            Link -{" "}
            <a
              href=" https://mr-kartik143.github.io/portfolio/"
              className="rfont"
            >
              https://mr-kartik143.github.io/portfolio/
            </a>
          </p>

          <hr className="my-4" size="6" width="90%" color="white" />
          {/* second project start */}

          <li className="text-light ffont mb-3">
            Text-Editor -{" "}
            <span className="text-light rfont mx-2">
              Utilize The Text As Per User Requirements.
            </span>
          </li>
          <p className="text-light ffont">
            Duration - <span className="rfont">One Month</span>
          </p>
          <p className="text-light ffont">
            Technologies Used -{" "}
            <span className="rfont">
              React, Javascript, Html, Css, Bootstrap
            </span>
          </p>
          <p className="text-light ffont">
            Link -{" "}
            <a
              href="https://mr-kartik143.github.io/Text-Editor/"
              className="rfont"
            >
              https://mr-kartik143.github.io/Text-Editor/{" "}
            </a>
          </p>

          <hr className="my-4" size="6" width="90%" color="white" />
          {/* third project start */}

          <li className="text-light ffont mb-3">
            Stock Lerner -{" "}
            <span className="text-light rfont mx-2">
              Paper Treading Website, Help User To Lern Treading.
            </span>
          </li>
          <p className="text-light ffont">
            Duration - <span className="rfont">Four Months</span>
          </p>
          <p className="text-light ffont">
            Technologies Used -{" "}
            <span className="rfont">
              React, Javascript, Html, Css, Bootstrap, MongoDB, Node Js, Express
            </span>
          </p>
          <p className="text-light ffont mb-5">
            Link -{" "}
            <span
              href=""
              className="rfont"
            >
              Work In Progress
            </span>
          </p>
        </ul>
      </div>
    </div>
  );
}

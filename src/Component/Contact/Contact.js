import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="container contactbox" id="contact">
      <p className="text-danger ffont fs-2 text-center mt-5">Contact me</p>
      <h5 className="text-center container text-light ffont mb-4">
        Get In Touch
      </h5>
      <div className="contactbox1 mx-5 mb-5">
        <strong className="text-danger fs-4 ffont text1 mb-4">
          Get In Touch
        </strong>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            fill="currentColor"
            className="bi bi-person-fill icon"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          </svg>
          <strong className="text-light rfont text1 mx-1 mt-3">Name</strong>
          <strong className="rfont text2 mx-5">Kartik Auti.</strong>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            fill="currentColor"
            className="bi bi-geo-alt-fill icon"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          <strong className="text-light rfont text1 mx-1 mt-3">Address</strong>
          <strong className="front text2 mx-5">Pune Maharshtra.</strong>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            fill="currentColor"
            className="bi bi-envelope-fill icon"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
          </svg>
          <strong className="text-light rfont text1 mx-1 mt-3">Email</strong>
          <a
            href="mailto:mrkartikauti@gmail.com"
            className="rfont text2 mx-5 txtdoc"
          >
            Click Here
          </a>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            fill="currentColor"
            className="bi bi-telephone-fill icon"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            />
          </svg>
          <strong className="text-light rfont text1 mx-1 mt-3">Contact</strong>
          <strong className="rfont text2 mx-5 mb-3">+91 9028282660</strong>
        </div>
      </div>
      <div className="contactbox2 mt-5 mx-5">
        <strong className="text-danger fs-4 ffont text2 mb-4 ">
          Social Media
        </strong>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            fill="currentColor"
            className="bi bi-whatsapp icon"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
          <strong className="text-light rfont text1 mx-1 mt-3">Whatsapp</strong>
          <a
            href="https://api.whatsapp.com/send?phone=+919028282660&text=Hi%20There!"
            className="rfont text2 mx-5 txtdoc"
          >
            Say hii to me on whatsapp
          </a>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            fill="currentColor"
            className="bi bi-linkedin icon"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>{" "}
          <strong className="text-light rfont text1 mx-1 mt-3">Linkedin</strong>
          <a
            href="https://www.linkedin.com/in/kartik-auti-077269258"
            className="rfont text2 mx-5 txtdoc"
          >
            Lets Conect
          </a>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            fill="currentColor"
            className="bi bi-github icon"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          <strong className="text-light rfont text1 mx-1 mt-3">GitHub</strong>
          <a
            href="https://github.com/mr-Kartik143"
            className="rfont text2 mx-5 txtdoc"
          >
            Visit My Repositories
          </a>
        </div>
        <div></div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            fill="currentColor"
            className="bi bi-info-circle-fill icon"
            viewBox="0 0 16 16"
          >
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
          <strong className="text-light rfont text1 mx-1 mt-3">Instagam</strong>
          <a
            href="http://instagram.com/mr_kartik_auti_"
            className="rfont text2 mx-5 mb-5 txtdoc"
          >
            Like My Pics
          </a>
        </div>
      </div>
    </div>
  );
}

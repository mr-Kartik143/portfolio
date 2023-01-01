import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <p className="text-light footer footer2 text-center mt-5 mb-3">
          Website is Designed & Developed By
          <span className="text-danger footer"> Kartik Auti </span>
          <span className="text-light footer"> || &copy; </span>
          <span className="text-light footer"> 2022-23 All </span>
          <span className="text-danger footer"> Rights </span>
          <span className="text-light footer"> Reserved </span>
        </p>
      </footer>
    </div>
  );
}

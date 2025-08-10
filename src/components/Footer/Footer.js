import { Typography } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import resumeData from "../../utils/resumeData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          {/* Designed and Developed by{" "} */}
          <a href="/" target="_blank">
            All projects are open-source and available on my GitHub. They are created purely for learning purposes, primarily by following YouTube tutorials, and are often clones or practice implementations.          </a>
          <br />
          {/* Clone idea from{" "}
          <a href="https://youtu.be/N2-RWOEfdcU" target="_blank">
            Youtube(Salman Fazal)
          </a>
          . */}
        </Typography>
      </div>
    </div>
  );
};

export default Footer;

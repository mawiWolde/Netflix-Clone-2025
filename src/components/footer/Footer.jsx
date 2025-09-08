import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import style from "./footer.module.css";

const footerColumns = [
  ["Audio Description", "Investor Relations", "Legal Notice"],
  ["Help Center", "Jobs", "Cookie Preferences"],
  ["Gift Cards", "Terms of Use", "Corporate Information"],
  ["Media Center", "Privacy", "Contact Us"]
];

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.socialMedia}>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        <div className={style.footerLinks}>
          {footerColumns.map((column, colIndex) => (
            <ul key={colIndex} className={style.footerColumn}>
              {column.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a href="#" className={style.footerLink}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className={style.footerCopy}>&copy; 1997–2024 Netflix, Inc.</div>
      </div>
    </footer>
  );
};

export default Footer;

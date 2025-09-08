import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import NetflixLogo from "@/assets/Netflix_Symbol_RGB.png";
import XIcon from "@mui/icons-material/X";
import style from "./header.module.css";
const navLinks = [
  "Home",
  "TV Shows",
  "Movies",
  "Latest",
  "My List",
  "Browse by Languages"
];
const Header = () => {
  return (
    <div className={style.header_container}>
      <div className={style.logoandNavigation}>
        <div className="logo">
          <a href="/">
            <img
              src={NetflixLogo}
              alt="Netflix Logo"
              className={style.navLogo}
            />
          </a>
        </div>
        <div className={style.naveLink}>
          <ul>
            {navLinks?.map((items) => (
              <li key={items}>{items}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={style.icons}>
        <ul>
          <li>
            <SearchIcon />
          </li>
          <li>
            <NotificationsNoneIcon />
          </li>
          <li>
            <AccountBoxIcon />
          </li>
          <li>
            <XIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

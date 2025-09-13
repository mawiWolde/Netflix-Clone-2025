import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import NetflixLogo from "@/assets/Netflix_Symbol_RGB.png";
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
          <a href="/" aria-label="Netflix Home">
            <img
              src={NetflixLogo}
              alt="Netflix Logo"
              className={style.navLogo}
            />
          </a>
        </div>
        <nav className={style.naveLink} aria-label="Primary Navigation">
          <ul>
            {navLinks.map((item) => (
              <li key={item} tabIndex={0}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
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
        </ul>
      </div>
      {/* <button
          className={style.mobileWindowMenu}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button> */}
    </div>
  );
};

export default Header;

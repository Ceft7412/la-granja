import React from "react";
import Image from "next/image";
import LaGranja from "@/resources/images/LaGranja.jpg";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
/**
 * icons
 */
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
function Section1() {
  return (
    <section className="navbar-item">
      <div className="navbar__logo-container">
        <h1 className="navbar-logo__big">Granja</h1>
        <h2 className="navbar-logo__small">LA</h2>
      </div>
      <div className="navbar__input-container">
        <input
          type="text"
          placeholder="Search.."
          name=""
          id=""
          className="navbar__input"
        />
        <SearchRoundedIcon className="navbar__search-icon" />
      </div>
      <nav>
        <MenuRoundedIcon className="navbar__menu-icon" />
        <ul className="navbar__menu">
          <li className="navbar-menu__itm">
            <a href="" className="navbar-menu__link">
              <AddShoppingCartOutlinedIcon />
            </a>
          </li>
          <li className="navbar-menu__itm">
            <a href="" className="navbar-menu__link">
              <ReceiptLongOutlinedIcon />
            </a>
          </li>
          <li className="navbar-menu__itm">
            <a href="" className="navbar-menu__link">
              <TextsmsOutlinedIcon />
            </a>
          </li>
          <li className="navbar-menu__itm">
            <a href="" className="navbar-menu__link">
              <AccountCircleOutlinedIcon />
            </a>
          </li>
          <li className="navbar-menu__itm">
            <a href="" className="navbar-menu__link">
              <HelpOutlineOutlinedIcon />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Section1;

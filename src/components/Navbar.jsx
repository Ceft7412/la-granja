import React from "react";
import TopBar from "./TopBar";
import LaGranja from "@/resources/images/LaGranja.jpg";
import Image from "next/image";

/**
 * icons
 */
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__flex">
        <section className="navbar-item">
          <h1>
            <Image src={LaGranja} alt="" width={150} height={100} />
          </h1>
          <input
            type="text"
            placeholder="Search.."
            name=""
            id=""
            className="navbar__input"
          />
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
        </section>
        <TopBar />
      </div>
    </nav>
  );
}

export default Navbar;

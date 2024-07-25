import React from "react";
import Section1 from "@/components/navigationBar/Section1";
import Section2 from "@/components/navigationBar/Section2";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__flex">
        <Section1 />
        <Section2 />
      </div>
    </header>
  );
}

export default Navbar;

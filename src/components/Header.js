import React from "react";

function Header() {
  return (
    <header>
      <div>
        <h1> My Website </h1>
      </div>
      <nav>
        <a href="/?city=Singapore"> Singapore </a>
        <a href="/?city=New%20York"> New York </a>
        <a href="/?city=Tokyo"> Tokyo </a>
        <a href="/?city=Jakarta"> Jakarta </a>
      </nav>
    </header>
  );
}

export default Header;

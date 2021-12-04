import "./header.css";
import nature from "../../assets/images/nature.jpg";
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={nature} alt="" />
    </div>
  );
}

export default Header;

import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { useState } from "react";

const cx = classNames.bind(styles);

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className={cx("navbar")}>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={cx(activeNav === "#" ? "active" : "", "navbar__item")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={cx(activeNav === "#about" ? "active" : "", "navbar__item")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={cx(
          activeNav === "#experience" ? "active" : "",
          "navbar__item"
        )}
      >
        <BiBook />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={cx(activeNav === "#contact" ? "active" : "", "navbar__item")}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
}

export default Nav;

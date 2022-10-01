import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineAppstore,
} from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { useState } from "react";
import ScrollIntoView from "react-scroll-into-view";
const cx = classNames.bind(styles);

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className={cx("navbar")}>
      <ScrollIntoView selector="#header">
        <button
          onClick={() => setActiveNav("#header")}
          className={cx(
            activeNav === "#header" ? "active" : "",
            "navbar__item"
          )}
        >
          <AiOutlineHome />
        </button>
      </ScrollIntoView>
      <ScrollIntoView selector="#about">
        <button
          onClick={() => setActiveNav("#about")}
          className={cx(activeNav === "#about" ? "active" : "", "navbar__item")}
        >
          <AiOutlineUser />
        </button>
      </ScrollIntoView>
      <ScrollIntoView selector="#skills">
        <button
          onClick={() => setActiveNav("#skills")}
          className={cx(
            activeNav === "#skills" ? "active" : "",
            "navbar__item"
          )}
        >
          <AiOutlineAppstore />
        </button>
      </ScrollIntoView>
      <ScrollIntoView selector="#resume">
        <button
          onClick={() => setActiveNav("#resume")}
          className={cx(
            activeNav === "#resume" ? "active" : "",
            "navbar__item"
          )}
        >
          <BiBook />
        </button>
      </ScrollIntoView>
      <ScrollIntoView selector="#contact">
        <button
          onClick={() => setActiveNav("#contact")}
          className={cx(
            activeNav === "#contact" ? "active" : "",
            "navbar__item"
          )}
        >
          <AiOutlineMessage />
        </button>
      </ScrollIntoView>
    </nav>
  );
}

export default Nav;

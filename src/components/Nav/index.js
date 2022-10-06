import { useState } from "react";

import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineAppstore,
} from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { Link } from "react-scroll";
import ScrollIntoView from "react-scroll-into-view";
const cx = classNames.bind(styles);

function Nav() {
  return (
    <nav className={cx("navbar")}>
      <Link
        activeClass={cx("active")}
        spy={true}
        smooth={true}
        duration={50}
        offset={-50}
        isDynamic={true}
        to="header"
        className={cx("navbar__item")}
      >
        <AiOutlineHome />
      </Link>
      <Link
        activeClass={cx("active")}
        spy={true}
        smooth={true}
        duration={50}
        offset={-50}
        to="about"
        className={cx("navbar__item")}
      >
        <AiOutlineUser />
      </Link>
      <Link
        activeClass={cx("active")}
        spy={true}
        smooth={true}
        duration={50}
        offset={-50}
        to="skills"
        className={cx("navbar__item")}
      >
        <AiOutlineAppstore />
      </Link>
      <Link
        activeClass={cx("active")}
        spy={true}
        smooth={true}
        duration={50}
        offset={-50}
        to="resume"
        className={cx("navbar__item")}
      >
        <BiBook />
      </Link>
      <Link
        activeClass={cx("active")}
        spy={true}
        smooth={true}
        duration={50}
        offset={-50}
        to="contact"
        isDynamic={true}
        className={cx("navbar__item")}
      >
        <AiOutlineMessage />
      </Link>
    </nav>
  );
}

export default Nav;

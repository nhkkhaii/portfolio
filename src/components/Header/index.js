import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub, BsInstagram } from "react-icons/bs";
import Me from "../../assets/img/NHK3.jpg";
const cx = classNames.bind(styles);

function Header() {
  return (
    <div id="header" className={cx("item")}>
      <div className={cx("header__container")}>
        <h1 className={cx("header__name", "showtotop", "delay-02")}>
          Ninh Hoang Khai
        </h1>
        <h2
          className={cx(
            "text-light",
            "header__content",
            "showtotop",
            "delay-02"
          )}
        >
          I'm A Front-end Developer
        </h2>
        <div className={cx("me")}>
          <img
            className={cx("me--image", "showtotop", "delay-04")}
            src={Me}
            alt="Me"
          />
        </div>
        <div className={cx("header__socials", "showtotop", "delay-06")}>
          <a
            className={cx("header__socials--item")}
            href="https://www.facebook.com/nhk.khai/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            className={cx("header__socials--item")}
            href="https://github.com/nhkkhaii"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            className={cx("header__socials--item")}
            href="https://www.instagram.com/_youngboik/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub, BsInstagram } from "react-icons/bs";
import Me from "../../assets/img/NHK3.jpg";
const cx = classNames.bind(styles);

function Header() {
  return (
    <header id="header">
      <div className={cx("header__container")}>
        <h1 className={cx("header__name")}>Ninh Hoang Khai</h1>
        <h2 className={cx("text-light", "header__content")}>
          I'm A Front-end Developer
        </h2>
        <div className={cx("me")}>
          <img className={cx("me--image")} src={Me} alt="Me" />
        </div>
        <div className={cx("header__socials")}>
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
    </header>
  );
}

export default Header;

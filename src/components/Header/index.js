import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub, BsInstagram } from "react-icons/bs";
import Me from "../../assets/img/NHK1.jpg";
const cx = classNames.bind(styles);

function Header() {
  return (
    <header>
      <div className={cx("container", "header__container")}>
        <h2 className={cx("header_name")}>Ninh Hoang Khai</h2>
        <h5 className={cx("text-light", "header__content")}>
          I'm A Front-end Developer
        </h5>
        <div className={cx("me")}>
          <img src={Me} alt="Me" />
        </div>
        <div className={cx("header__socials")}>
          <a
            className={cx("header__socials--item")}
            href="https://www.facebook.com/nhk.khai/"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            className={cx("header__socials--item")}
            href="https://github.com/nhkkhaii"
            target="_blank"
          >
            <BsGithub />
          </a>
          <a
            className={cx("header__socials--item")}
            href="https://www.instagram.com/_youngboik/"
            target="_blank"
          >
            <BsInstagram />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

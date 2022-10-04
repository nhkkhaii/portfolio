import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footer__container", "item")}>
      <h1 className={cx("footer__title")}>Ninh Hoang Khai</h1>
      <h2 className={cx("footer__slogan")}>Always try harder than yesterday</h2>
      <div className={cx("footer__socials")}>
        <a
          target="_blank"
          href="https://www.facebook.com/nhk.khai/"
          className={cx("footer__socials--item")}
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          target="_blank"
          href="https://github.com/nhkkhaii"
          className={cx("footer__socials--item")}
          rel="noreferrer"
        >
          <AiOutlineGithub />
        </a>

        <a
          target="_blank"
          href="mailto:nhkkhaii@gmail.com"
          className={cx("footer__socials--item")}
          rel="noreferrer"
        >
          <MdOutlineEmail />
        </a>
        <a
          target="_blank"
          href="https://github.com/nhkkhaii"
          className={cx("footer__socials--item")}
          rel="noreferrer"
        >
          <AiOutlineInstagram />
        </a>
      </div>
      <h5 className={cx("footer__copyright")}>
        &copy; Copyright{" "}
        <a
          href="https://www.instagram.com/_youngboik/"
          className={cx("footer__copyright--link")}
          rel="noreferrer"
          target="_blank"
        >
          Ninh Hoang Khai
        </a>
        . All Rights Reserved
      </h5>
    </div>
  );
}

export default Footer;

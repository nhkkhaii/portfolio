import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
const cx = classNames.bind(styles);

function Contact() {
  return (
    <section id="contact">
      <h1 className={cx("contact__title")}>Contact Me</h1>
      <div className={cx("contact__container")}>
        <div className={cx("contact__options", "row")}>
          <div className={cx("contact__option", "col", "l-3", "m-3", "c-8")}>
            <BsPhone className={cx("contact__option--icon")} />
            <h2 className={cx("contact__option--title")}>Call Number</h2>
            <h3 className={cx("contact__option--content")}>+84 945772109</h3>
          </div>
          <div className={cx("contact__option", "col", "l-3", "m-3", "c-8")}>
            <a
              href="mailto:nhkkhaii@gmail.com"
              className={cx("contact__option--mail")}
            >
              <MdOutlineEmail className={cx("contact__option--icon")} />
              <h2 className={cx("contact__option--title")}>Email</h2>
              <h3 className={cx("contact__option--content")}>
                nhkkhaii@gmail.com
              </h3>
            </a>
          </div>
          <div className={cx("contact__option", "col", "l-3", "m-3", "c-8")}>
            <MdOutlineLocationOn className={cx("contact__option--icon")} />
            <h2 className={cx("contact__option--title")}>Location</h2>
            <h3 className={cx("contact__option--content")}>
              Ho Chi Minh City, Viet Nam
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

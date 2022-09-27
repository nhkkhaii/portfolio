import classNames from "classnames/bind";
import styles from "./About.module.scss";
import NHK from "../../assets/img/NHK.jpg";
const cx = classNames.bind(styles);

function About() {
  return (
    <section id="about">
      <h2 className={cx("about__title")}>About Me</h2>
      <div className={cx("container", "about__container")}>
        <div className={cx("about__me")}>
          <img
            className={cx("about__me--image")}
            src={NHK}
            alt="About Image"
          ></img>
        </div>
        <div className={cx("about__info")}></div>
      </div>
    </section>
  );
}

export default About;

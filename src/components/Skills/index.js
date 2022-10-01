import classNames from "classnames/bind";
import styles from "./Skills.module.scss";
import HTML from "../../assets/img/html_portfolio.png";
import CSS from "../../assets/img/css_portfolio.png";
import JS from "../../assets/img/js_portfolio.png";
import ReactJS from "../../assets/img/reactjs_portfolio.png";

const cx = classNames.bind(styles);

function Skills() {
  return (
    <section id="skills">
      <h1 className={cx("skills__title")}>My Skills</h1>
      <div className={cx("skills__container")}>
        {/* FRONT_END */}
        <div className={cx("skills__fe")}>
          <h2 className={cx("skills__fe--title")}>Frontend Developer</h2>
          <div className={cx("skills__content")}>
            <div className={cx("skills__item")}>
              <img className={cx("skills__item--image")} src={HTML} />
              <h3 className={cx("skills__item--name")}>HTML</h3>
            </div>
            <div className={cx("skills__item")}>
              <img className={cx("skills__item--image")} src={CSS} />
              <h3 className={cx("skills__item--name")}>CSS</h3>
            </div>
            <div className={cx("skills__item")}>
              <img className={cx("skills__item--image")} src={JS} />
              <h3 className={cx("skills__item--name")}>JavaScript</h3>
            </div>
            <div className={cx("skills__item")}>
              <img className={cx("skills__item--image")} src={ReactJS} />
              <h3 className={cx("skills__item--name")}>ReactJS</h3>
            </div>
          </div>
        </div>
        <div className={cx("skills__be")}>
          <h2 className={cx("skills__be--title")}>Backend Developer</h2>
        </div>
      </div>
    </section>
  );
}

export default Skills;

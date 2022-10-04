import classNames from "classnames/bind";
import styles from "./Skills.module.scss";
import HTML from "../../assets/img/html_portfolio.png";
import CSS from "../../assets/img/css_portfolio.png";
import JS from "../../assets/img/js_portfolio.png";
import ReactJS from "../../assets/img/reactjs_portfolio.png";
import SQL from "../../assets/img/sql_server.png";
import MySQL from "../../assets/img/mysql.png";

const cx = classNames.bind(styles);

function Skills() {
  return (
    <section id="skills" className={cx("item")}>
      <h1 className={cx("skills__title", "showtotop", "delay-02")}>
        My Skills
      </h1>
      <div className={cx("skills__container", "row")}>
        {/* FRONT_END */}
        <div
          className={cx(
            "skills__fe",
            "col",
            "c-11",
            "m-5",
            "l-5",
            "showtotop",
            "delay-04"
          )}
        >
          <h2 className={cx("skills__fe--title")}>Frontend Developer</h2>
          <div className={cx("skills__content", "row")}>
            <div className={cx("skills__item", "col", "l-4", "m-6", "c-6")}>
              <img
                className={cx("skills__item--image")}
                src={HTML}
                alt="HTML"
              />
              <h3 className={cx("skills__item--name")}>HTML</h3>
            </div>
            <div className={cx("skills__item", "col", "l-4", "m-6", "c-6")}>
              <img className={cx("skills__item--image")} src={CSS} alt="CSS" />
              <h3 className={cx("skills__item--name")}>CSS</h3>
            </div>
            <div className={cx("skills__item", "col", "l-4", "m-6", "c-6")}>
              <img className={cx("skills__item--image")} src={JS} alt="JS" />
              <h3 className={cx("skills__item--name")}>JavaScript</h3>
            </div>
            <div className={cx("skills__item", "col", "l-4", "m-6", "c-6")}>
              <img
                className={cx("skills__item--image")}
                src={ReactJS}
                alt="ReactJS"
              />
              <h3 className={cx("skills__item--name")}>ReactJS</h3>
            </div>
          </div>
        </div>
        {/* BACKEND */}
        <div
          className={cx(
            "skills__be",
            "col",
            "c-11",
            "m-5",
            "l-5",
            "showtotop",
            "delay-04"
          )}
        >
          <h2 className={cx("skills__be--title")}>Backend Developer</h2>
          <div className={cx("skills__content", "row")}>
            <div className={cx("skills__item", "col", "l-4", "m-6", "c-6")}>
              <img
                className={cx("skills__item--image")}
                src={SQL}
                alt="SQL Server"
              />
              <h3 className={cx("skills__item--name")}>SQL Server</h3>
            </div>
            <div className={cx("skills__item", "col", "l-4", "m-6", "c-6")}>
              <img
                className={cx("skills__item--image")}
                src={MySQL}
                alt="MySQL"
              />
              <h3 className={cx("skills__item--name")}>MySQL</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

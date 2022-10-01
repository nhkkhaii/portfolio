import classNames from "classnames/bind";
import styles from "./Resume.module.scss";
const cx = classNames.bind(styles);

function Resume() {
  return (
    <section id="Resume">
      <h1 className={cx("Resume__title")}>Resume Me</h1>
      <div className={cx("Resume__container", "row")}>
        <div className={cx("Resume__wrapper", "col", "c-6")}>
          <h2 className={cx("Resume__wrapper--title")}>Education</h2>
          <div className={cx("Resume__item")}></div>
        </div>
        <div className={cx("Resume__wrapper", "col", "c-6")}>
          <h2 className={cx("Resume__wrapper--title")}>
            Professional Experience
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Resume;

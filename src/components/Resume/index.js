import classNames from "classnames/bind";
import styles from "./Resume.module.scss";
const cx = classNames.bind(styles);

function Resume() {
  return (
    <section id="resume">
      <h1 className={cx("Resume__title")}>Resume</h1>
      <div className={cx("Resume__container", "row")}>
        <div className={cx("Resume__wrapper", "col", "c-6")}>
          <h2 className={cx("Resume__wrapper--title")}>Education</h2>
          <div className={cx("Resume__item")}>
            <h3 className={cx("Resume__item--name")}>BACHELOR'S DEGREE</h3>
            <h4 className={cx("Resume__item--date")}>08/2018 - 09/2022</h4>
            <h5 className={cx("Resume__item--location")}>
              Nam Can Tho University, Can Tho City
            </h5>
            <p className={cx("Resume__item--description")}>
              I am an 18th term student in 2018 years, graduated in 2022.
            </p>
            <p className={cx("Resume__item--role")}>
              Specialization: Infomation Technology
            </p>
          </div>
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

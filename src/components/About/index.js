import classNames from "classnames/bind";

import styles from "./About.module.scss";
import NHK from "../../assets/img/NHK.jpg";
import CV from "../../assets/CV_Ninh_Hoang_Khai_Front_End_Developer.pdf";
import { BiChevronRight } from "react-icons/bi";
const cx = classNames.bind(styles);

function About() {
  return (
    <section id="about" className={cx("item")}>
      <h1 className={cx("about__title", "showtotop", "delay-02")}>About Me</h1>
      <h2 className={cx("about__overview", "showtotop", "delay-02")}>
        With a big interest in Software Development, I have taken 4 projects
        during University. In the next three years, I want to be a Senior
        Full-stack Software Engineer.
      </h2>
      <div className={cx("about__container", "row")}>
        <div
          className={cx(
            "about__me",
            "col",
            "c-12",
            "m-12",
            "l-5",
            "showtotop",
            "delay-04"
          )}
        >
          <img className={cx("about__me--image")} src={NHK} alt="About" />
        </div>
        <div
          className={cx(
            "about__info",
            "col",
            "c-12",
            "m-12",
            "l-7",
            "showtotop",
            "delay-06"
          )}
        >
          <h3 className={cx("about__info--title")}>
            Web Designer & Frontend Developer
          </h3>
          <div className={cx("about__content", "row")}>
            <div
              className={cx(
                "about__content--left",
                "col",
                "c-12",
                "m-12",
                "l-6"
              )}
            >
              <ul className={cx("about__list")}>
                <li className={cx("about__list--item")}>
                  <BiChevronRight />
                  <strong>Full Name : </strong>
                  <span>Ninh Hoang Khai</span>
                </li>
                <li className={cx("about__list--item")}>
                  <BiChevronRight />
                  <strong>Birthday :</strong>
                  <span>August 17th, 2000</span>
                </li>
                <li className={cx("about__list--item")}>
                  <BiChevronRight />

                  <strong>Website :</strong>
                  <span> My site</span>
                </li>
                <li className={cx("about__list--item")}>
                  <BiChevronRight />
                  <strong>Phone :</strong>
                  <span>(+84) 945772109</span>
                </li>
                <li className={cx("about__list--item")}>
                  <BiChevronRight />
                  <strong>City :</strong>
                  <span>Ho Chi Minh City, VietNam</span>
                </li>
              </ul>
            </div>
            <div
              className={cx(
                "about__content--right",
                "col",
                "col",
                "c-12",
                "m-12",
                "l-6"
              )}
            >
              <ul className={cx("about__list")}>
                <li className={cx("about__list--item")}>
                  <BiChevronRight />
                  <strong>Age :</strong>
                  <span>22</span>
                </li>
                <li className={cx("about__list--item")}>
                  <BiChevronRight />
                  <strong>Degree :</strong>
                  <span> Low Lever Dev</span>
                </li>
                <li className={cx("about__list--item")}>
                  <BiChevronRight />
                  <strong>Email :</strong>
                  <a
                    href="mailto:nhkkhaii@gmail.com"
                    className={cx("about__mail")}
                  >
                    nhkkhaii@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx("about__summary")}>
            <h3 className={cx("about__summary--title")}>Summary :</h3>
            <p className={cx("about__summary--content")}>
              Learning new languages and technologies is what I am passionate
              about. I like helping others and working well with the group.I am
              eager to learn new things to be able to develop myself better
            </p>
          </div>
          <div className={cx("about__action")}>
            <a
              className={cx("about__action--cv")}
              href={CV}
              download
              alt="My CV"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

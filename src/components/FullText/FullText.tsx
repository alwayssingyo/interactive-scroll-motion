import css from "./FullText.module.scss";
import classNames from "classnames/bind";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const cx = classNames.bind(css);
gsap.registerPlugin(useGSAP, ScrollTrigger);

const FullText = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".full_wrap",
      start: "top 80%",
      onEnter: () => {
        EnterText();
      },
    });

    const EnterText = () => {
      const textTl = gsap.timeline();
      textTl.to(".full_text", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      textTl.to(
        ".full_text",
        {
          fontVariationSettings: `"wght" 900`,
          fontWeight: 900,
          duration: 1.2,
          ease: "power3.inOut",
          onComplete: () => {
            moveEnent();
          },
        },
        ">-0.5"
      );
    };

    const moveEnent = () => {
      document.addEventListener("mousemove", (e) => {
        const width = window.innerWidth;
        let x = e.clientX;
        let NewValLeft = ((x - 0) * (100 - 900)) / (width - 0) + 900;
        let NewValueRight = ((x - 0) * (900 - 100)) / (width - 0) + 100;

        gsap.to(".full_left .full_text", {
          duration: 1.5,
          ease: "power3",
          fontVariationSettings: `"wght" ${NewValLeft}`,
          fontWeight: NewValLeft,
        });
        gsap.to(".full_right .full_text", {
          duration: 1.5,
          ease: "power3",
          fontVariationSettings: `"wght" ${NewValueRight}`,
          fontWeight: NewValueRight,
        });
      });
    };
  });

  return (
    <div className={cx("full_wrap")}>
      <div className={cx("full_sec", "full_left")}>
        <span className={cx("full_text")}>R</span>
      </div>
      <div className={cx("full_sec", "full_right")}>
        <span className={cx("full_text")}>A</span>
      </div>
    </div>
  );
};

export default FullText;

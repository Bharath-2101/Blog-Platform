"use client";
import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { Navigation, Social } from "@/project data";
import useStore from "@/Hooks/UseStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavMenu = () => {
  const Menu = useRef();
  const Filter = useRef();
  const { hamburgerClick, changeHamburgerClick } = useStore();
  useGSAP(() => {
    if (hamburgerClick) {
      gsap
        .timeline()
        .to(
          Menu.current,
          {
            xPercent: -120,
            opacity: 1,
            duration: 0.9,
            ease: "cubic-bezier(0.7, 0, 0.3, 1)",
            transformOrigin: "top",
          },
          0
        )
        .to(
          Filter.current,
          {
            opacity: 0.75,
            pointerEvents: "auto",
            duration: 0.9,
            ease: "cubic-bezier(0.7, 0, 0.3, 1)",
          },
          0
        );
    } else {
      gsap
        .timeline()
        .to(Menu.current, {
          xPercent: 0,
          opacity: 0,
          duration: 0.9,
          ease: "cubic-bezier(0.7, 0, 0.3, 1)",
          transformOrigin: "top",
        })
        .to(
          Filter.current,
          {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.9,
            ease: "cubic-bezier(0.7, 0, 0.3, 1)",
          },
          0
        );
    }
  }, [hamburgerClick]);

  return (
    <>
      <div className={styles.Header}>
        <div className={styles.HeadContainer}>
          <a href="/">
            <div>B</div>
          </a>
          <div className={styles.Nav}>
            <div
              onClick={changeHamburgerClick}
              className={`${styles.Hamburger} ${
                hamburgerClick ? styles.active : ""
              }`}
            >
              <span />
              <span />
            </div>
            <div ref={Menu} className={styles.Menu}>
              <div className={styles.SubMenu}>
                <a className="">Navigation</a>
                {Navigation.map((navItem, index) => (
                  <a key={index} className="">
                    <span>{navItem.title}</span>
                  </a>
                ))}
              </div>

              <div className={styles.SubMenu}>
                <a className="">Social</a>
                {Social.map((navItem, index) => (
                  <a href={navItem.link} key={index} className="">
                    <span>{navItem.title}</span>
                  </a>
                ))}
              </div>

              <div className={styles.ToogleTheme}>
                <div className="">Theme</div>
                <div>Go Light</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={Filter}
        onClick={changeHamburgerClick}
        className={styles.Filter}
      />
    </>
  );
};

export default NavMenu;

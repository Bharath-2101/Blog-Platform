"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { Category } from "@/project data";
import gsap from "gsap";

const Filter = () => {
  const Con = useRef();
  const [category, setCategory] = useState("All");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      gsap.to(Con.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
        ease: "cubic-bezier(0.7, 0, 0.3, 1)",
      });
    } else {
      gsap.to(Con.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
        ease: "cubic-bezier(0.7, 0, 0.3, 1)",
      });
    }
  }, [open]);
  return (
    <div onClick={() => setOpen(!open)} className={styles.MainContainer}>
      {/* Category */}
      <div className={styles.FilterTitle}>{category}</div>
      {/* Chevorn Arrow */}
      <div
        style={{ transform: open ? "rotate(-90deg)" : "rotate(0deg)" }}
        className={styles.ChevronContainer}
      >
        <svg
          className="h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 40 L50 80 L90 40" fill="none" />
        </svg>
      </div>

      {/* Category Container */}
      <div ref={Con} className={styles.CategoryCon}>
        {Category.map((cat, index) => (
          <div onClick={() => setCategory(cat)} className={styles.Row}>
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;

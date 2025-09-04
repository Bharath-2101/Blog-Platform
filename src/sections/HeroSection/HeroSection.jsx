"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Canvas } from "@react-three/fiber";
import ThreeModel from "@/componets/ThreeModel/ThreeModel";

const HeroSection = () => {
  const [height, setHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 900);
      console.log(height + " " + isDesktop);
    };
    setHeight(
      window.innerHeight +
        ((window.screen.height - window.innerHeight) * 62) / 100
    );

    setIsDesktop(window.innerWidth > 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div
        id="Index"
        style={{ height: !isDesktop ? height : "100dvh" }}
        className={`${styles.MainContainer} `}
      >
        <div className={styles.Canvas}>
          <Canvas>
            <ThreeModel />
          </Canvas>
        </div>
        <div className={`${styles.SubContainer} `}>
          Hi I'm Bharath, and this is my blog. In here, you'll find all the
          articles I wished I had when I was learning about web development,
          shaders, real-time 3D.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

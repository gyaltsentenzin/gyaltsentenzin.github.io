import React from "react";
import { getImageUrl } from "../../util";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I am Tenzin</h1>
        <p className={styles.description}>
          I'm a full-stack developer with experience in Java, JavaScript,
          Python. I am currently a student at Macalester College and I have a
          demonstrated history at both startup and major technology corporation
          in the United States.
        </p>
        <a
          href="mailto:tenzingyaltsen15@gmail.com"
          className={styles.contactBtn}
        >
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      ></img>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

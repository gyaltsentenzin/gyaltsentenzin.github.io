import React from "react";
import { getImageUrl } from "../../util";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3> Frontend Developer</h3>
              <p> Experience in building responsive and optimized sites</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3> Backend Developer</h3>
              <p>
                {" "}
                Experience in developing fast and optimized backend system and
                API endpoints
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3> UI Designer</h3>
              <p> Designed multiple landing pages and created design systems</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

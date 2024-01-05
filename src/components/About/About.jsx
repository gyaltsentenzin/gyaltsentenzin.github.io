import React from "react";
import { getImageUrl } from "../../util";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3> Backend Developer</h3>
              <p>
                I have industry experience in developing optimized and well
                tested backend system and API endpoints. I have demonstrated
                experience in Java Spring framework and developing API endpoints
                using RESTAPI and gRPC tools.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3> IOS Developer</h3>
              <p>
                I have proven experience in IOS development using UIKit library
                and game development using SpriteKit.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3> FrontEnd Development </h3>
              <p>
                I have developed project experience in developing frontend
                application using React with Bootstrap.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

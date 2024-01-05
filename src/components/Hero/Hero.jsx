import React from "react";
import { getImageUrl } from "../../util";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I am Tenzin</h1>
        <p className={styles.tibetandescription}>
          རྣམ་པ་ལྷན་རྒྱས་སྐུ་ཁམས་བཟང་། གུས་པའི་མིེང་ལ་བསྟན་འཛིན་རྒྱལ་མཚན་ཟེར་།
          ད་ལྟ་ང་མཐོ་རིམ་སློབ་གྲ་རུ་གློག་ལས་ཚན་རིག་སྦྱོང་བཞིན་ཡོད་།
          སློབ་རིམ་ཐོན་རྗེས་མཉེན་ཆས་འཆར་འགོད་ཆེད་ལས་པ་ཞིག་ཆགས་པའི་བསྒྲུབ་བྱ་ཡིན་།
        </p>
        <p className={styles.description}>
          As an aspiring Software Engineer, I bring a blend of experience from
          both startup and corporate environments. My ability to quickly adapt
          to new technologies is complemented by a deep curiosity and drive to
          tackle challenging problems. Currently, in my senior year at
          Macalester College, I'm majoring in Computer Science and Political
          Science. During my time at Macalester, I've had the opportunity to
          collaborate with professors and classmates as a preceptor for Computer
          Science courses. My professional journey includes enriching
          experiences in software engineering with Sparrow Charts and Uber over
          the past two summers. This year, my focus is on honing my skills in
          backend engineering. I am eager to bring my gritty and collaborative
          spirit to an entry-level role in your organization. Please feel free
          to connect with me through LinkedIn or email me at
          ttenzing@macalester.edu. For a more detailed overview of my work and
          skills.
        </p>
        {/* <a
          href="mailto:tenzingyaltsen15@gmail.com"
          className={styles.contactBtn}
        >
          Contact me
        </a> */}
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

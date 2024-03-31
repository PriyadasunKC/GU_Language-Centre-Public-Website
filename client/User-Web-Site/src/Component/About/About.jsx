import React from "react";
import styles from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <div className={styles.aboutMain}>
        <div className={styles.aboutLeft}>
          <div className={styles.aboutSectionTitle}>About Us</div>
          <div className={styles.aboutSectionSubTitle}>
            We Provide the Best Opportunities to the
            <br /> Students Around the Globe.
          </div>
          <div className={styles.aboutSectionDescription}>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in. Lorem ipsum
            dolor sit amet consectetur. Tempus tincidunt etiam eget elit id
            imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
            habitasse in velit fringilla feugiat senectus in.Lorem ipsum dolor
            sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet
            et. Cras eu sit dignissim lorem nibh et.
          </div>
          <button className={styles.AboutUsButton}>
            Read More
            <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />
          </button>
        </div>

        <div className={styles.abourRight}>
          <img src="/public/about.png" alt="" className={styles.aboutImage} />
        </div>
      </div>
    </>
  );
};

export default About;
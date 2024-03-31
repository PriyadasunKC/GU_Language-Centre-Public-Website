import React from "react";
import FeatureStyles from "./Features.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap"

const Features = () => {
  return (
    <div className={FeatureStyles.FeatureContainer}>
      <div className={FeatureStyles.featureImageContainer}>
        <img
          className={FeatureStyles.featureImage}
          src="/public/features.png"
          alt="featureImage"
        />
      </div>
      <div className={FeatureStyles.featureTextContainer}>
        <div className={FeatureStyles.featureTitle}>Features</div>
        <div className={FeatureStyles.featureSubTitle}>
          Learn With the Best &<br /> Experienced Mentors
        </div>
        <div className={FeatureStyles.featureList}>
          <div className={FeatureStyles.featureListTitle}>Highly Qualified</div>
          <div className={FeatureStyles.featureDescription}>
            Our teachers are highly qualified and have years of experience
            teaching English to learners of all levels.
          </div>
        </div>
        <div className={FeatureStyles.featureList}>
          <div className={FeatureStyles.featureListTitle}>Latest Methods</div>
          <div className={FeatureStyles.featureDescription}>
            They use the latest teaching methods and materials to help you
            achieve your goals and improve your English skills.
          </div>
        </div>
        <div className={FeatureStyles.featureList}>
          <div className={FeatureStyles.featureListTitle}>Passionate</div>
          <div className={FeatureStyles.featureDescription}>
            Our mentors are passionate about teaching and are dedicated to
            helping you succeed. They provide personalized feedback and support
            to help you overcome any challenges and reach your full potential.
          </div>
        </div>
        <Button className={FeatureStyles.FeatureUsButton}>
          Register
          <FontAwesomeIcon
            icon={faArrowRight}
            className={FeatureStyles.arrow}
            href="http://registration.gulcentre.com/"
            target="_blank"
          />
        </Button>
      </div>
    </div>
  );
};

export default Features;

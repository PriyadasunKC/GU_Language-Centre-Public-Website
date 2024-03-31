import React from "react";
import CourseStructureStyles from "./CourseStructure.module.css";

const CourseStructure = () => {
  return (
    <div className={CourseStructureStyles.CourseStructureContainer}>
      <div className={CourseStructureStyles.CourseStructureTextContainer}>
        <div className={CourseStructureStyles.CourseStructureTitle}>
          Course Structure
        </div>

        <div className={CourseStructureStyles.CourseStructureSubTitle}>
          Learn through three level processes
        </div>

        <div className={CourseStructureStyles.CourseStructureDescription}>
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Lorem ipsum dolor sit amet consectetur.
        </div>
      </div>

      <div className={CourseStructureStyles.CourseStructureCardContainer}>
        <div className={CourseStructureStyles.CourseStructureCardRow}>
          <div
            className={`${CourseStructureStyles.CourseStructureCard}`}
          >
            <div className={CourseStructureStyles.CourseStructureCardIcon}>
              <img src="/public/No1.png" alt="" />
            </div>
            <div className={CourseStructureStyles.CourseStructureCardTitle}>
              Standardization
            </div>
            <div
              className={CourseStructureStyles.CourseStructureCardDescription}
            >
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et.
            </div>
          </div>
          <div
            className={`${CourseStructureStyles.CourseStructureCard}`}
          >
            <div className={CourseStructureStyles.benefitCardIcon}>
              <img src="/public/No2.png" alt="" />
            </div>
            <div className={CourseStructureStyles.CourseStructureCardTitle}>
              More Customization
            </div>
            <div
              className={CourseStructureStyles.CourseStructureCardDescription}
            >
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et.
            </div>
          </div>
          <div
            className={`${CourseStructureStyles.CourseStructureCard}`}
          >
            <div className={CourseStructureStyles.CourseStructureCardIcon}>
              <img src="/public/No3.png" alt="" />
            </div>
            <div className={CourseStructureStyles.CourseStructureCardTitle}>
              Affordable Pricing
            </div>
            <div className={CourseStructureStyles.benefitCardDescription}>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseStructure;

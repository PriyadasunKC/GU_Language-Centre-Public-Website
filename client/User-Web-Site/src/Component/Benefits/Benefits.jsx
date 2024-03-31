import React from "react";
import BenefitStyles from "./Benefits.module.css";

const Benefits = () => {
  return (
    <div className={BenefitStyles.benefitContainer}>
      <div className={BenefitStyles.benefitTextContainer}>
        <div className={BenefitStyles.benefitsTitle}>Our Benefits</div>

        <div className={BenefitStyles.benefitsSubTitle}>
          By Joining With Us, One Can Avail <br />a Lot Of Benefits.
        </div>

        <div className={BenefitStyles.benefitsDescription}>
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et.
        </div>
      </div>

      <div className={BenefitStyles.benefitsCardContainer}>
        <div className={BenefitStyles.benefitCardRow}>
          <div
            className={`${BenefitStyles.benefitCard} ${BenefitStyles.CardSpecial}`}
          >
            <div className={BenefitStyles.benefitCardIcon}>
              <img src="/public/No1.png" alt="" />
            </div>
            <div className={BenefitStyles.benefitCardTitle}>
              Standardization
            </div>
            <div className={BenefitStyles.benefitCardDescription}>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et.
            </div>
          </div>
          <div
            className={`${BenefitStyles.benefitCard} ${BenefitStyles.CardSpecial2}`}
          >
            <div className={BenefitStyles.benefitCardIcon}>
              <img src="/public/No2.png" alt="" />
            </div>
            <div className={BenefitStyles.benefitCardTitle}>
              More Customization
            </div>
            <div className={BenefitStyles.benefitCardDescription}>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et.
            </div>
          </div>
          <div
            className={`${BenefitStyles.benefitCard} ${BenefitStyles.CardSpecial}`}
          >
            <div className={BenefitStyles.benefitCardIcon}>
              <img src="/public/No3.png" alt="" />
            </div>
            <div className={BenefitStyles.benefitCardTitle}>
              Affordable Pricing
            </div>
            <div className={BenefitStyles.benefitCardDescription}>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et.
            </div>
          </div>
        </div>
        <div className={BenefitStyles.benefitCardRow}>
          <div
            className={`${BenefitStyles.benefitCard} ${BenefitStyles.CardSpecial2}`}
          >
            <div className={BenefitStyles.benefitCardIcon}>
              <img src="/public/No4.png" alt="" />
            </div>
            <div className={BenefitStyles.benefitCardTitle}>
              Learner Satisfaction
            </div>
            <div className={BenefitStyles.benefitCardDescription}>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et.
            </div>
          </div>
          <div
            className={`${BenefitStyles.benefitCard} ${BenefitStyles.CardSpecial}`}
          >
            <div className={BenefitStyles.benefitCardIcon}>
              <img src="/public/No5.png" alt="" />
            </div>
            <div className={BenefitStyles.benefitCardTitle}>
              Multimedia Materials
            </div>
            <div className={BenefitStyles.benefitCardDescription}>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et.
            </div>
          </div>
          <div
            className={`${BenefitStyles.benefitCard} ${BenefitStyles.CardSpecial2}`}
          >
            <div className={BenefitStyles.benefitCardIcon}>
              <img src="/public/No6.png" alt="" />
            </div>
            <div className={BenefitStyles.benefitCardTitle}>Reduced Costs</div>
            <div className={BenefitStyles.benefitCardDescription}>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

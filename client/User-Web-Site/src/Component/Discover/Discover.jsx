import React from 'react'
import DiscoverStyles from './Discover.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Discover = () => {
  return (
    <div className={DiscoverStyles.DiscoverContainer}>
      <div className={DiscoverStyles.discoverText}>
        <div className={DiscoverStyles.discoverTitle}>
          Discover your current <br /> English level by taking <br /> our{" "}
          <span className={DiscoverStyles.discoverTitleSpecial}>
            free online test
          </span>
        </div>
        <div className={DiscoverStyles.discoverDescription}>
          This online level test will give you an approximate indication of your
          English proficiency level. you can use the result that can help you to
          find courses or learning content on our website that is appropriate
          for you English language ability.
        </div>
        <button className={DiscoverStyles.DiscoverButton}>
          Read More
          <FontAwesomeIcon
            icon={faArrowRight}
            className={DiscoverStyles.arrow}
          />
        </button>
      </div>
      <div className={DiscoverStyles.discoverImage}>
        <img
          src="/public/Discover.png"
          alt="Discover"
        />
      </div>
    </div>
  );
}

export default Discover

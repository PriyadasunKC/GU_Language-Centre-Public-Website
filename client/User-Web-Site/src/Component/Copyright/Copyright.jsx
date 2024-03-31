import React from 'react'
import copyRightStyles from "./Copyright.module.css"

const Copyright = () => {
  return (
    <div className={copyRightStyles.copyRightContainer}>
      Copyright © 2023 - {new Date().getFullYear()} CodeVanguard
    </div>
  );
}

export default Copyright

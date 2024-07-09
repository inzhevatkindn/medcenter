import classNames from "classnames";
import React from "react";
import styles from "./Logo.module.scss";

const Logo = ({ isRevert }) => (
  <div className={classNames(styles.logo, isRevert ? styles.revert : "")}>
    <div className={styles.circle} />
  </div>
);

export default Logo;

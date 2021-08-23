import React from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import classNames from "classnames";
import styles from "./Header.module.scss";

const Header = ({ handleClick, menuActive }) => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <h1
            className={classNames(styles.headerTitle, styles.headerTitle_1)}
            id="long"
          >
            Get Fun with Chuck Norris
          </h1>
          <h1
            className={classNames(styles.headerTitle, styles.headerTitle_2)}
            id="short"
          >
            Fun with Chuck
          </h1>
          <div className={styles.headerBurger} onClick={handleClick}>
            {menuActive ? <HiOutlineX /> : <HiOutlineMenu />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

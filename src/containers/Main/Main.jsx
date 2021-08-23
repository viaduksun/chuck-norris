import React from "react";
import Favorite from "../Favorite/Favorite";
import SearchSection from "../SearchSection/SearchSection";
import styles from "./Main.module.scss";

const Main = ({ menuActive }) => {
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.mainBody}>
          <SearchSection />
          <Favorite menuActive={menuActive} />
        </div>
      </div>
    </div>
  );
};

export default Main;

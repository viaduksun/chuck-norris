import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFavoritesFromLocal } from "../../store/favorites/actions";
import Favorite from "../Favorite/Favorite";
import SearchSection from "../SearchSection/SearchSection";
import styles from "./Main.module.scss";

const Main = ({ menuActive }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const initFavorite = JSON.parse(localStorage.getItem("favorite"));
    if (initFavorite) {
      dispatch(setFavoritesFromLocal(initFavorite));
    }
  }, [dispatch]);
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

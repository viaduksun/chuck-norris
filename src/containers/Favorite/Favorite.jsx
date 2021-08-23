import React, { useContext } from "react";
import styles from "./Favorite.module.scss";
import FavoriteCards from "./FavoriteCards/FavoriteCards";
import { useSelector } from "react-redux";
import UserContext from "../../services/userContext";
import classNames from "classnames";
// import useUser from '../../hooks/useUser'

const Favorite = ({ menuActive }) => {
  // const {name} = useUser()
  const { name } = useContext(UserContext);
  const favoriteAmount = useSelector((state) => state.favorite.length);
  return (
    <div
      className={classNames(styles.Favorite, {
        [styles.Favorite_active]: menuActive,
      })}
    >
      <h3>
        {name} Favorite ({favoriteAmount})
      </h3>
      <FavoriteCards />
    </div>
  );
};

export default Favorite;

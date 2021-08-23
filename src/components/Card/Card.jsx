/* eslint-disable no-unused-vars */
import React from "react";
import classNames from "classnames";
import styles from "./CardsBlock.module.scss";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteJokeAction,
  removeFavoriteJokeAction,
} from "../../store/favorites/actions";
import { GrChat } from "react-icons/gr";

const Card = ({ joke }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite);

  const isFavorite = favorites.some((elem) => elem.id === joke.id);

  const handleLike = () => {
    if (isFavorite) {
      dispatch(removeFavoriteJokeAction(joke.id));
    } else {
      dispatch(addFavoriteJokeAction(joke));
    }
  };

  if (!joke) return null;

  return (
    <div className={styles.cardItem}>
      <div className={styles.header}>
        <div className={styles.iconAvatar}>
          <img src={joke.icon_url} alt="fvatar" />
        </div>
        <button className={styles.cardLikeBtn} onClick={handleLike}>
          {isFavorite ? (
            <HiHeart className={styles.heart} />
          ) : (
            <HiOutlineHeart className={styles.heart} />
          )}
        </button>
      </div>

      <div className={styles.content}>
        <GrChat className={styles.chatIcon} />
        <p
          className={classNames(styles.text, { [styles.favorite]: isFavorite })}
        >
          {joke.value}
        </p>
      </div>
      <div className={styles.footer}>
        <div className={styles.idBlock}>
          ID:
          <a
            className={styles.idLink}
            href={joke.id}
            target="_blank"
            rel="noreferrer"
          >
            {joke.id}
          </a>
        </div>
        <span className={styles.update}>Last update {joke.updated_at}</span>
      </div>
    </div>
  );
};
export default Card;

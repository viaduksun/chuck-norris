import React, { useContext } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import styles from "./CardsBlock.module.scss";
import UserContext from "../../services/userContext";

const CardsBlock = () => {
  const jokes = useSelector((state) => state.jokes);
  const jokesList = jokes.map((joke) => <Card joke={joke} key={joke.id} />);
  const { name } = useContext(UserContext);

  return (
    <div className={styles.card_block}>
      {jokes.length ? (
        <ul className={styles.card_block_ul}>{jokesList}</ul>
      ) : (
        <h1>No results for {name}</h1>
      )}
    </div>
  );
};

export default CardsBlock;

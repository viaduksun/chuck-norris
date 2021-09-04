import React, { useContext } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import styles from "./CardsBlock.module.scss";
import UserContext from "../../services/userContext";
import PaginationRounded from "../Pagination/PaginationRounded";
import { useState } from "react";
import { useEffect } from "react";

const CardsBlock = () => {
  const jokes = useSelector((state) => state.jokes.jokes);
  const [chunk, setChunk] = useState([]);
  const [pages, setPages] = useState(1);
  console.log(jokes);

  useEffect(() => {
    if (jokes) {
      const pagesCount = Math.ceil(jokes.length / 10);
      console.log(pagesCount);
      setPages(pagesCount);

      if (jokes.length > 10) {
        setChunk(jokes.slice(0, 10));
      } else {
        setChunk(jokes);
      }
    }
  }, [jokes]);

  // const currentJokeChunk = jokes.slice(0, 10);

  const handlePagination = (currPage) => {
    console.log(currPage);
    const end = currPage * 10;
    const begin = end - 10;
    if (end >= jokes.length) {
      setChunk(jokes.slice(begin));
    } else {
      setChunk(jokes.slice(begin, end));
    }
  };

  const jokesList = chunk.map((joke) => <Card joke={joke} key={joke.id} />);
  const { name } = useContext(UserContext);

  return (
    <div className={styles.card_block}>
      {jokes ? (
        <>
          {jokes.length > 2 && (
            <div className={styles.count}>({jokes.length} results)</div>
          )}
          <ul className={styles.card_block_ul}>{jokesList}</ul>
          {jokes.length > 10 && (
            <PaginationRounded
              pages={pages}
              handlePagination={handlePagination}
            />
          )}
        </>
      ) : (
        <h1>No results for {name}</h1>
      )}
    </div>
  );
};

export default CardsBlock;

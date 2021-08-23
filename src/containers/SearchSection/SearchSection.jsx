/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import CardsBlock from "../../components/Card/CardsBlock";
import styles from "./SearchSection.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchJokes } from "../../store/jokes/actions";
import classNames from "classnames";

const SearchSection = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState(null);
  const [logoOn, setLogoOn] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJokes());
  }, []);

  const clearState = () => {
    setSelectedCategory("");
    setQuery("");
  };
  const handleGetJoke = () => {
    setLogoOn(!logoOn);
    dispatch(fetchJokes(selectedCategory, query));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const handleQueryChange = (query) => {
    setSelectedCategory("");
    setQuery(query);
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.LogoWrapp}>
        <div className={classNames(styles.Logo, { [styles.on]: logoOn })}>
          <img src="img/chuck222.png" alt="logo" />
        </div>
      </div>
      <div className={styles.searchFormContainer}>
        <h2 className={styles.Title}>Hey!</h2>
        <p className={styles.Text}>Let's try to find a joke for you:</p>
        <Form
          clearState={clearState}
          onClick={handleGetJoke}
          onCategoryChange={handleCategoryChange}
          onQueryChange={handleQueryChange}
        />
        <CardsBlock />
      </div>
    </div>
  );
};

export default SearchSection;

import React, { useState } from "react";
import Categories from "../Categories/Categories";
import ButtonUI from "../UI/Button/ButtonUI";
import InputSearch from "../UI/InputSearch/InputSearch";
import styles from "./Form.modules.scss";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    bigRadio: {
      "& svg": {
        width: "28px",
        height: "28px",
        color: "#795a59",
      },
    },
    label: {
      fontSize: "18px",
    },
  })
);

const Form = ({ onClick, onCategoryChange, onQueryChange, clearState }) => {
  const classes = useStyles();
  const [value, setValue] = useState("a");
  const handleChange = (event) => {
    setValue(event.target.value);
    clearState();
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="a"
          control={<Radio />}
          label="Random"
          classes={{ label: classes.label }}
          className={classes.bigRadio}
          onChange={handleChange}
        />
        <FormControlLabel
          value="b"
          control={<Radio />}
          label="From categories"
          classes={{ label: classes.label }}
          className={classes.bigRadio}
          onChange={handleChange}
        />
        {value === "b" && <Categories onSelect={onCategoryChange} />}
        <FormControlLabel
          value="c"
          control={<Radio />}
          label="Search"
          classes={{ label: classes.label }}
          className={classes.bigRadio}
          onChange={handleChange}
        />
        {value === "c" && <InputSearch onQuery={onQueryChange} />}
      </RadioGroup>
      <ButtonUI type="submit" onClick={onClick}>
        Get a joke
      </ButtonUI>
    </form>
  );
};

export default Form;

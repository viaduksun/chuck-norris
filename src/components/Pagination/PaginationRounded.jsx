import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import styles from "./Pagination.module.scss";
import { setCurrentPageAction } from "../../store/jokes/actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const StyledPagination = withStyles({
  root: {
    "& .MuiPaginationItem-outlined": {
      border: "1px solid rgb(160, 74, 74)",
      color: "rgb(160, 74, 74)",
    },
    "& .Mui-selected": {
      border: "1px solid rgb(209, 55, 28)",
      color: "rgb(83, 35, 26)",
      backgroundColor: "rgba(119, 58, 47, 0.5)",
    },
    "& .MuiPaginationItem-ellipsis": {
      color: "rgb(255, 115, 91)",
    },
  },
})(Pagination);

export default function PaginationRounded({ pages, handlePagination }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (event, value) => {
    dispatch(setCurrentPageAction(value));
    handlePagination(value);
  };

  return (
    <div className={styles.Pagination}>
      <div className={classes.root}>
        <StyledPagination
          count={pages}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

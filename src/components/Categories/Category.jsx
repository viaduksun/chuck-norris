import React from "react";
import "./categories.scss";

const Category = ({
  onSelect,
  category,
  categorySelect,
  categoryClassList,
}) => {
  return (
    <li
      className={categoryClassList}
      onClick={() => {
        categorySelect(category);
        onSelect(category);
      }}
    >
      {category}
    </li>
  );
};

export default Category;

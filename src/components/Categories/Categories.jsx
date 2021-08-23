import React, { useEffect, useState } from "react";
import getCategories from "../../api/getCategories";
import Category from "./Category";
import "./categories.scss";

const Categories = ({ onSelect }) => {
  const [categories, setCategories] = useState([]);
  const [categoryIsSelected, setcategoryIsSelected] = useState(null);
  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  const handleCategorySelect = (category) => {
    setcategoryIsSelected(category);
  };

  return (
    <ul>
      {categories.map((category, index) => {
        return (
          <Category
            onSelect={onSelect}
            key={index}
            category={category}
            categorySelect={handleCategorySelect}
            categoryClassList={
              categoryIsSelected === category ? "category active" : "category"
            }
          />
        );
      })}
    </ul>
  );
};

export default Categories;

import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

// category data get

export const ContextProvider = ({ children }) => {
  const [categories, setCategory] = useState([]);
  const [subCategories, setSubCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    getCategoryData();
    getSubCategoryData();
    getProductData();
  }, []);

  const getCategoryData = async () => {
    const { data } = await axios.get("http://localhost:8000/api/category");
    setCategory(data.categories);
  };
  const getSubCategoryData = async () => {
    const { data } = await axios.get("http://localhost:8000/api/subcategory");
    setSubCategory(data.subCategory);
  };
  const getProductData = async () => {
    const { data } = await axios.get("http://localhost:8000/api/products");
    setProducts(data.products);
    setBrands(data?.products);
  };
  return (
    <Context.Provider
      value={{ categories, products, subCategories, setProducts, brands }}
    >
      {children}
    </Context.Provider>
  );
};

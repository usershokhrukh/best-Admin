import axios from "axios";
import React, {useEffect, useState} from "react";
import Table from "./Table";
import {toast} from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState();
  async function getRequest() {
    loaderF(true);
    const request = await axios.get("http://localhost:3000/products");
    return request;
  }
  useEffect(() => {
    const getResponse = getRequest()
      .then((response) => {
        setTimeout(() => {
          loaderF(false);
          setProducts(response?.data)
        }, 1000);
      })
      .catch((error) => {
        toast.error("Error acquired!", {
          backgroundColor: "black",
        });
      });
  }, []);
  
  function loaderF(bool) {
    const loader = document.querySelector(".dashboard__hr");
    if (bool) {
      loader.classList.add("loader");
      loader.classList.remove("none");
    } else {
      loader.classList.remove("loader");
      loader.classList.add("none");
    }
  }
  return <div>
    <Table data={products} status={"products"}/>
  </div>;
};

export default Products;

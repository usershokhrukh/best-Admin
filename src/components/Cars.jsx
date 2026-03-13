// import React from 'react'

// const Cars = () => {
//   return (
//     <div>Cars</div>
//   )
// }

// export default Cars

import axios from "axios";
import React, {useEffect, useState} from "react";
import Table from "./Table";
import {toast} from "react-toastify";

const Cars = () => {
  const [cars, setCars] = useState();
  async function getRequest() {
    loaderF(true);
    const request = await axios.get("http://localhost:3000/cars");
    return request;
  }
  useEffect(() => {
    const getResponse = getRequest()
      .then((response) => {
        setTimeout(() => {
          loaderF(false);
          setCars(response?.data)
        }, 1000);
      })
      .catch((error) => {
        toast.error("Error acquired!", {
          backgroundColor: "black",
        });
      });
  }, []);

  console.log(cars);
  
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
    <Table data={cars} status={"cars"}/>
  </div>;
};

export default Cars;

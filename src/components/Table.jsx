import React, {useState} from "react";
import "../assets/block/main.scss";
import Modal from "./Modal";
import {useAsyncError} from "react-router-dom";
const Table = ({data, status}) => {
  console.log(status);
  const [productId, setProductsId] = useState({
    id: null,
    status: "",
    select: ""
  });

  const handleProductId = (id, status, select) => {
    setProductsId({...productId, id, status, select});
    setOpened(true);
  };
  const [opened, setOpened] = useState(false);
  if (status === "products") {
    return (
      <table className="main__table">
        <thead className="main__table-head">
          <th className="main__table-hd">Id</th>
          <th className="main__table-hd">Image</th>
          <th className="main__table-hd">Name</th>
          <th className="main__table-hd">Price</th>
          <th className="main__table-hd">Category</th>
          <th className="main__table-hd">Action</th>
        </thead>
        <tbody className="main__table-body">
          {data?.map(({id, image, name, price, category}, index) => (
            <tr className="main__table-r main__table-animate">
              <td className="main__table-d">{id}</td>
              <td className="main__table-d">
                <img
                  style={{borderRadius: 10}}
                  width={"150"}
                  height={100}
                  src={image}
                  alt=""
                />
              </td>
              <td className="main__table-d">{name}</td>
              <td className="main__table-d">{price}$</td>
              <td className="main__table-d">{category}</td>
              <td className="main__table-d">
                <span>
                  <svg
                    onClick={() => {
                      handleProductId(id, "products", "view");
                    }}
                    className="main__table-svgs"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                  </svg>
                  <svg
                    className="main__table-svgs"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path>
                  </svg>
                  <svg
                    className="main__table-svgs"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.53451 3H20.9993C21.5516 3 21.9993 3.44772 21.9993 4V20C21.9993 20.5523 21.5516 21 20.9993 21H6.53451C6.20015 21 5.88792 20.8329 5.70246 20.5547L0.369122 12.5547C0.145189 12.2188 0.145189 11.7812 0.369122 11.4453L5.70246 3.4453C5.88792 3.1671 6.20015 3 6.53451 3ZM7.06969 5L2.40302 12L7.06969 19H19.9993V5H7.06969ZM15.9993 11V13H8.99932V11H15.9993Z"></path>
                  </svg>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        {opened ? <Modal status={productId} opened={setOpened} /> : null}
      </table>
    );
  } else if (status === "users") {
    return (
      <table className="main__table">
        <thead className="main__table-head">
          <th className="main__table-hd">Id</th>
          <th className="main__table-hd">Avatar</th>
          <th className="main__table-hd">Name</th>
          <th className="main__table-hd">Email</th>
          <th className="main__table-hd">Role</th>
          <th className="main__table-hd">Joined</th>
          <th className="main__table-hd">Country</th>
          <th className="main__table-hd">Action</th>
        </thead>
        <tbody className="main__table-body">
          {data?.map(
            ({id, avatar, name, role, email, joined, country}, index) => (
              <tr className="main__table-r main__table-animate">
                <td className="main__table-d">{id}</td>
                <td className="main__table-d">
                  <img
                    style={{borderRadius: 50}}
                    width={"50"}
                    src={avatar}
                    alt=""
                  />
                </td>
                <td className="main__table-d">{name}</td>
                <td className="main__table-d">{email}</td>
                <td className="main__table-d">{role}</td>
                <td className="main__table-d">{joined}</td>
                <td className="main__table-d">{country}</td>
                <td className="main__table-d">
                  <span>
                    <svg
                      onClick={() => {
                        handleProductId(id, "users", "view");
                      }}
                      className="main__table-svgs"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                    </svg>
                    <svg
                      className="main__table-svgs"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path>
                    </svg>
                    <svg
                      className="main__table-svgs"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.53451 3H20.9993C21.5516 3 21.9993 3.44772 21.9993 4V20C21.9993 20.5523 21.5516 21 20.9993 21H6.53451C6.20015 21 5.88792 20.8329 5.70246 20.5547L0.369122 12.5547C0.145189 12.2188 0.145189 11.7812 0.369122 11.4453L5.70246 3.4453C5.88792 3.1671 6.20015 3 6.53451 3ZM7.06969 5L2.40302 12L7.06969 19H19.9993V5H7.06969ZM15.9993 11V13H8.99932V11H15.9993Z"></path>
                    </svg>
                  </span>
                </td>
              </tr>
            ),
          )}
        </tbody>
        {opened ? <Modal status={productId} opened={setOpened} /> : null}
      </table>
    );
  } else if (status === "cars") {
    return (
      <table className="main__table">
        <thead className="main__table-head">
          <th className="main__table-hd">Id</th>
          <th className="main__table-hd">Image</th>
          <th className="main__table-hd">Make</th>
          <th className="main__table-hd">Model</th>
          <th className="main__table-hd">Price</th>
          <th className="main__table-hd">Color</th>
          <th className="main__table-hd">Year</th>
          <th className="main__table-hd">Action</th>
        </thead>
        <tbody className="main__table-body">
          {data?.map(({id, image, make, model, price, color, year}, index) => (
            <tr className="main__table-r main__table-animate">
              <td className="main__table-d">{id}</td>
              <td className="main__table-d">
                <img
                  style={{borderRadius: 10}}
                  width={"150"}
                  height={100}
                  src={image}
                  alt=""
                />
              </td>
              <td className="main__table-d">{make}</td>
              <td className="main__table-d">{model}</td>
              <td className="main__table-d">{price}$</td>
              <td className="main__table-d">{color}</td>
              <td className="main__table-d">{year}</td>
              <td className="main__table-d">
                <span>
                  <svg
                    onClick={() => {
                      handleProductId(id, "cars", "view");
                    }}
                    className="main__table-svgs"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                  </svg>
                  <svg
                    className="main__table-svgs"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path>
                  </svg>
                  <svg
                    className="main__table-svgs"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.53451 3H20.9993C21.5516 3 21.9993 3.44772 21.9993 4V20C21.9993 20.5523 21.5516 21 20.9993 21H6.53451C6.20015 21 5.88792 20.8329 5.70246 20.5547L0.369122 12.5547C0.145189 12.2188 0.145189 11.7812 0.369122 11.4453L5.70246 3.4453C5.88792 3.1671 6.20015 3 6.53451 3ZM7.06969 5L2.40302 12L7.06969 19H19.9993V5H7.06969ZM15.9993 11V13H8.99932V11H15.9993Z"></path>
                  </svg>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        {opened ? <Modal status={productId} opened={setOpened} /> : null}
      </table>
    );
  }
};

export default Table;

import axios from "axios";
import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import "../assets/block/modal.scss";
const Modal = ({status, opened}) => {
  if (status.select === "view") {
    if (status.status === "products") {
      const [modalData, setModalData] = useState();

      useEffect(() => {
        axios
          .get(`http://localhost:3000/products/${status.id}`)
          .then((response) => {
            const product = response.data;
            setModalData(product);
          })
          .catch((error) => {
            toast.error("Error acquired!");
            throw new Error(error);
          });
      }, [status.id, status.status, status.select]);

      return (
        <div className="modal">
          <svg
            onClick={() => opened(false)}
            className="modal__exit"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
          </svg>
          <div className="modal__boxes">
            <h2 className="modal__title">ID:</h2>
            <p className="modal__texts">{modalData?.id}</p>
          </div>
          <div className="modal__boxes">
            <img className="modal__img" src={modalData?.image} alt="" />
          </div>
          <div className="modal__boxes">
            <p className="modal__texts">{modalData?.name}</p>
          </div>
          <div className="modal__boxes">
            <p
              style={{color: "gray", fontWeight: 400, fontSize: 16}}
              className="modal__texts"
            >
              {modalData?.description}
            </p>
          </div>
          <div className="modal__boxes">
            <p
              style={{
                color: "green",
                backgroundColor: "lightgreen",
                padding: 4,
                borderRadius: 8,
              }}
              className="modal__texts"
            >
              {modalData?.price}$
            </p>
          </div>
          <div className="modal__boxes">
            <p
              style={{backgroundColor: "black", padding: 8, borderRadius: 8}}
              className="modal__texts"
            >
              {modalData?.category}
            </p>
          </div>
        </div>
      );
    } else if (status.status === "users") {
      const [modalData, setModalData] = useState();

      useEffect(() => {
        axios
          .get(`http://localhost:3000/users/${status.id}`)
          .then((response) => {
            const product = response.data;
            setModalData(product);
          })
          .catch((error) => {
            toast.error("Error acquired!");
            throw new Error(error);
          });
      }, [status.id, status.status, status.select]);

      return (
        <div className="modal">
          <svg
            onClick={() => opened(false)}
            className="modal__exit"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
          </svg>
          <div className="modal__boxes">
            <h2 className="modal__title">ID:</h2>
            <p className="modal__texts">{modalData?.id}</p>
          </div>
          <div className="modal__boxes">
            <img className="modal__img" src={modalData?.avatar} alt="" />
          </div>
          <div className="modal__boxes">
            <p className="modal__texts">{modalData?.name}</p>
            <p
              style={{color: "gray", fontWeight: 400, fontSize: 16}}
              className="modal__texts"
            >
              {modalData?.email}
            </p>
          </div>
          <div className="modal__boxes">
            <p
              style={{color: "gray", fontWeight: 400, fontSize: 16}}
              className="modal__texts"
            >
              {modalData?.role}
            </p>
          </div>
          <div className="modal__boxes">
            <p
              style={{color: "gray", fontWeight: 400, fontSize: 16}}
              className="modal__texts"
            >
              {modalData?.joined}
            </p>
          </div>
          <div className="modal__boxes">
            <p
              style={{backgroundColor: "black", padding: 8, borderRadius: 8}}
              className="modal__texts"
            >
              {modalData?.country}
            </p>
          </div>
        </div>
      );
    }else if (status.status === "cars"){
            const [modalData, setModalData] = useState();

      useEffect(() => {
        axios
          .get(`http://localhost:3000/cars/${status.id}`)
          .then((response) => {
            const product = response.data;
            setModalData(product);
          })
          .catch((error) => {
            toast.error("Error acquired!");
            throw new Error(error);
          });
      }, [status.id, status.status, status.select]);

      return (
        <div className="modal">
          <svg
            onClick={() => opened(false)}
            className="modal__exit"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
          </svg>
          <div className="modal__boxes">
            <h2 className="modal__title">ID:</h2>
            <p className="modal__texts">{modalData?.id}</p>
          </div>
          <div className="modal__boxes">
            <img className="modal__img" src={modalData?.image} alt="" />
          </div>
          <div className="modal__boxes">
            <p className="modal__texts">{modalData?.make}</p>
            <p
              style={{color: "gray", fontWeight: 400, fontSize: 16}}
              className="modal__texts"
            >
              {modalData?.model}
            </p>
          </div>
          <div className="modal__boxes">
            <p
              style={{color: "gray", fontWeight: 400, fontSize: 16}}
              className="modal__texts"
            >
              {modalData?.year}
            </p>
          </div>
          <div className="modal__boxes">
            <p
              style={{
                color: "green",
                backgroundColor: "lightgreen",
                padding: 4,
                borderRadius: 8,
              }}
              className="modal__texts"
            >
              {modalData?.price}$
            </p>
          </div>
          <div className="modal__boxes">
            <p
              style={{backgroundColor: "black", padding: 8, borderRadius: 8}}
              className="modal__texts"
            >
              {modalData?.color}
            </p>
          </div>
        </div>
      );
    }
  }
};

export default Modal;

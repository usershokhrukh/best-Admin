import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const EditProductsModal = ({opened, status, setDataItems}) => {
  try {
        const reRender = () => {
          try {
            axios.get("http://localhost:3000/products").then((response) => {
              setDataItems(response?.data);
              toast.success("Successfully updated!");
              opened(false);
            });
          } catch (error) {
            toast.error("Error acquired!");
            throw new Error(error);
          }
        };
        const handleSubmit = (e) => {
          e.preventDefault();
          try {
            axios
              .put(`http://localhost:3000/products/${status.id}`, data)
              .then((response) => {
                reRender();
              });
          } catch (error) {
            toast.error("Error acquired!");
            throw new Error(error);
          }
        };
        const [data, setData] = useState({
          id: 0,
          name: "",
          price: null,
          category: "",
          description: "",
          image: "",
        });

        useEffect(() => {
          axios
            .get(`http://localhost:3000/products/${status.id}`)
            .then((response) => {
              setData({
                id: response?.data?.id,
                price: response?.data?.price,
                category: response?.data?.category,
                description: response?.data?.description,
                name: response?.data?.name,
                image: response?.data?.image,
              });
            });
        }, []);
        const handleInputs = (e) => {
          setData({
            ...data,
            [e.target.id]: e.target.value.trim(),
          });
        };
        return (
          <div className="modal__wr">
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
              <form onSubmit={handleSubmit} className="modal__form">
                <div className="modal__form-boxes">
                  <label className="modal__labels" htmlFor="name">
                    Name
                  </label>
                  <input
                    value={data?.name}
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                    required
                    className="modal__inputs"
                    id="name"
                    type="text"
                  />
                </div>
                <div className="modal__form-boxes">
                  <label className="modal__labels" htmlFor="price">
                    Price
                  </label>
                  <input
                    value={data?.price}
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                    required
                    className="modal__inputs"
                    id="price"
                    type="number"
                  />
                </div>
                <div className="modal__form-boxes">
                  <label className="modal__labels" htmlFor="category">
                    Category
                  </label>
                  <input
                    value={data?.category}
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                    required
                    className="modal__inputs"
                    id="category"
                    type="text"
                  />
                </div>
                <div className="modal__form-boxes">
                  <label className="modal__labels" htmlFor="image">
                    Image
                  </label>
                  <input
                    value={data?.image}
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                    required
                    className="modal__inputs"
                    id="image"
                    type="url"
                  />
                </div>
                <div className="modal__form-boxes">
                  <label className="modal__labels" htmlFor="description">
                    Description
                  </label>
                  <input
                    value={data?.description}
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                    required
                    className="modal__inputs"
                    id="description"
                    type="text"
                  />
                </div>
                <button className="modal__form-button">Edit</button>
              </form>
            </div>
          </div>
        );
      } catch (error) {
        toast.error("Error acquired!");
        throw new Error(error);
      }
}

export default EditProductsModal
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const EditCarsModal = ({opened, status, setDataItems}) => {
  try {
        const reRender = () => {
          try {
            axios.get("http://localhost:3000/cars").then((response) => {
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
              .put(`http://localhost:3000/cars/${status.id}`, data)
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
            .get(`http://localhost:3000/cars/${status.id}`)
            .then((response) => {
              setData({
                id: response?.data?.id,
                price: response?.data?.price,
                make: response?.data?.make,
                model: response?.data?.model,
                name: response?.data?.name,
                image: response?.data?.image,
                year: response?.data?.year,
                color: response?.data?.color
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
                  <label className="modal__labels" htmlFor="make">
                    Make
                  </label>
                  <input
                    value={data?.make}
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                    required
                    className="modal__inputs"
                    id="make"
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
                  <label className="modal__labels" htmlFor="model">
                      Model
                  </label>
                  <input
                    value={data?.model}
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                    required
                    className="modal__inputs"
                    id="model"
                    type="text"
                  />
                </div>
                <div className="modal__form-boxes">
                  <label className="modal__labels" htmlFor="year">
                      Year
                  </label>
                  <input
                    value={data?.year}
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                    required
                    className="modal__inputs"
                    id="year"
                    type="text"
                  />
                </div>
                <div className="modal__form-boxes">
                  <label className="modal__labels" htmlFor="color">
                      Color
                  </label>
                  <input
                    value={data?.color}
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                    required
                    className="modal__inputs"
                    id="color"
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

export default EditCarsModal
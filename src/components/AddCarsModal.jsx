import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const AddCarsModal = ({opened, status, setDataItems, dataL}) => {
      const [lastId, setLastId] = useState(dataL);
      const [data, setData] = useState({
        id: 0,
        name: "",
        price: null,
        category: "",
        description: "",
        image: "",
      });

      const handleInputs = (e) => {
        setData({
          ...data,
          [e.target.id]: e.target.value.trim(),
        });
      };

      const reRender = () => {
        try {
          axios.get("http://localhost:3000/cars").then((response) => {
            const LastId =
              Number(response?.data?.[response?.data.length - 1].id) + 1;
            setLastId(lastId);
            setDataItems(response?.data);
            toast.success("Successfully created!");
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
            .post("http://localhost:3000/cars", data)
            .then((response) => {
              reRender();
            });
        } catch (error) {
          toast.error("Error acquired!");
          throw new Error(error);
        }
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
                <label className="modal__labels" htmlFor="model">
                  Model
                </label>
                <input
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
                <label className="modal__labels" htmlFor="price">
                  Price
                </label>
                <input
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
                <label className="modal__labels" htmlFor="year">
                  Year
                </label>
                <input
                  onChange={(e) => {
                    handleInputs(e);
                  }}
                  required
                  className="modal__inputs"
                  id="year"
                  type="number"
                />
              </div>
              <div className="modal__form-boxes">
                <label className="modal__labels" htmlFor="image">
                  Image
                </label>
                <input
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
                <label className="modal__labels" htmlFor="make">
                  Make
                </label>
                <input
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
                <label className="modal__labels" htmlFor="color">
                  Color
                </label>
                <input
                  onChange={(e) => {
                    handleInputs(e);
                  }}
                  required
                  className="modal__inputs"
                  id="color"
                  type="text"
                />
              </div>
              <button className="modal__form-button">Create</button>
            </form>
          </div>
        </div>
      );
    
}

export default AddCarsModal
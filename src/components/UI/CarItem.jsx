import React from "react";
import { Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price, id } = props.item;
  const navigate = useNavigate();

  const handleRent = () => {
    console.log(`${carName} maşını icarəyə götürülür`);
    navigate(`/rent/${carName}`);
  };

  const handleDetails = () => {
    console.log(`${carName} haqqında təfərrüatlar`);
    navigate(`/cars/${id}`); 
  };

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="rent__price text-center mt-">
            ${price}.00 <span>/ Günlük</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className="d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {model}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {automatic}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          {/* <button onClick={handleRent} className="w-50 car__item-btn car__btn-rent">
            İcarə et
          </button> */}

          <button onClick={handleDetails} className="w-50 car__item-btn car__btn-details">
            Təfərrüatlar
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;

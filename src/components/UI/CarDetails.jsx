import React from "react";
import { useParams } from "react-router-dom";
import carData from "../path-to-car-data"; 

const CarDetails = () => {
  const { id } = useParams(); 

  const car = carData.find((item) => item.id === parseInt(id));

  if (!car) {
    return <div>Maşın tapılmadı!</div>;
  }

  return (
    <div>
      <h1>{car.carName}</h1>
      <img src={car.imgUrl} alt={car.carName} />
      <p><strong>Model:</strong> {car.model}</p>
      <p><strong>Qiymət:</strong> ${car.price}.00 / Günlük</p>
      <p><strong>Sürət:</strong> {car.speed}</p>
      <p><strong>Avtomatik:</strong> {car.automatic}</p>
      <p><strong>Açıklama:</strong> {car.description}</p>
      {}
    </div>
  );
};

export default CarDetails;

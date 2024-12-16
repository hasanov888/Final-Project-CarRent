import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const AvtomobilSiyahısı = () => {
  const [sortedCars, setSortedCars] = useState(carData); 
  const [sortOrder, setSortOrder] = useState(""); 
  useEffect(() => {
    if (sortOrder === "low") {
      const sorted = [...carData].sort((a, b) => a.price - b.price);
      setSortedCars(sorted);
    } else if (sortOrder === "high") {
      const sorted = [...carData].sort((a, b) => b.price - a.price);
      setSortedCars(sorted);
    } else {
      setSortedCars(carData);
    }
  }, [sortOrder]); 

  return (
    <Helmet title="Cars">
      <CommonSection title="Avtomobil Siyasısı" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sırala
                </span>

                <select
                  onChange={(e) => setSortOrder(e.target.value)} 
                >
                  <option value="">Seçin</option>
                  <option value="low">Əvvəlcə Ucuz</option>
                  <option value="high">Əvvəlcə Bahalı</option>
                </select>
              </div>
            </Col>

            {}
            {sortedCars.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AvtomobilSiyahısı;

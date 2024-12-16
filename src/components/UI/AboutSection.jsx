import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-x5.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">Haqqımızda</h4>
              <h2 className="section__title">Avtomobil icarəsi xidmətinə xoş gəlmisiniz</h2>
              <p className="section__description">
              Rent a Car Şirkəti avtomobil icarəsi sahəsində müştərilərə yüksək keyfiyyətli xidmət göstərən bir qurumdur. Şirkət, fərdi müştərilər və korporativ təşkilatlar üçün qısa və uzunmüddətli avtomobil kirayəsi xidmətləri təqdim edir. Müasir bazarın tələblərinə uyğun olaraq müxtəlif növ avtomobillər, sərfəli qiymətlər və müştəri yönümlü yanaşma təklif edir.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Avtomobil İcarəsi:
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Əlavə Xidmətlər:
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Tam Sığorta Təminatı:
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> 24/7 Müştəri Dəstəyi:
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;

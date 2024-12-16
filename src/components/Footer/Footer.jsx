import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "Haqqında",
  },

  {
    path: "#",
    display: "Məxfilik Siyasəti",
  },

  {
    path: "/cars",
    display: "Avtomobil Siyahısı",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Əlaqə",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Rent a Car <br /> in Baku
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Günlük və Aylıq Tariflər:
            <p>
            Sığorta: 
            <p>GPS və Dəstək Xidmətləri: 
              <p>Şəhərdaxili və Şəhərdən Kənar İstifadə:</p>
            </p>
            </p>
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Bağlantılar</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Baş ofis</h5>
              <p className="office__info">Aziz Aliyev 11 (nearby Hard Rock Cafe)</p>
              <p className="office__info">Telefon: +994554964772</p>

              <p className="office__info">Email: raulhesenov223@gmail.com</p>

              <p className="office__info">Ofis vaxtı: 10:00 - 19:00</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Xəbər bülleteni</h5>
              <p className="section__description">Bülletenimizə abunə olun</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Həsənov Raul. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

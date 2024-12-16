import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const Haqqında = () => { 
  return (
    <Helmet title="Haqqında">
      <CommonSection title="Haqqında" /> {}
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Biz Təhlükəsiz Sürüş Həlləri Təmin etməyə Sadiqik
                </h2>

                <p className="section__description">
                Şirkət olaraq əsas məqsədimiz, sürücülərin və sərnişinlərin təhlükəsizliyini təmin etmək üçün innovativ həllər təqdim etməkdir. Yüksək keyfiyyətli nəqliyyat vasitələri, müasir texnologiyalar və hərtərəfli dəstək xidmətlərimiz ilə yolda baş verə biləcək hər hansı problemi minimuma endirməyi hədəfləyirik. Təhlükəsiz sürüş, yalnız qaydalara əməl etməklə deyil, həm də etibarlı həllər təqdim edən bir tərəfdaşla mümkündür.
                </p>

                <p className="section__description">
                Sürücülərin təhlükəsizliyini ön planda tutaraq, yol təhlükələri ilə mübarizə aparmaq və hər kəsin etibarlı bir sürüş təcrübəsi yaşamasını təmin etmək üçün çalışırıq. İntuitiv texnologiyalar, müasir nəqliyyat vasitələri və peşəkar məsləhətlərimiz sayəsində, təhlükəsizliyiniz üçün lazım olan bütün həlləri təqdim edirik. Biz inanırıq ki, təhlükəsiz sürüş hər birimiz üçün əlçatan və vacib bir prioritetdir.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Kömək Lazımdır?</h6>
                    <h4>+994554964772</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Ekspertlər</h6>
              <h2 className="section__title">Komandamız</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Haqqında; 

import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";
import ava05 from "../../assets/all-images/raul.png"
import ava06 from "../../assets/all-images/revan.png"
import ava07 from "../../assets/all-images/senan.png"
import ava08 from "../../assets/all-images/araz.png"

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "Rent a car xidməti məni çox razı saldı. İki günlük səyahətim üçün ekonom sinif avtomobil kirayələdim. Maşın tam saz vəziyyətdə idi və heç bir problem yaşamadım. Üstəlik, xidmət çox sürətli idi – avtomobili götürmək və təhvil vermək cəmi 5 dəqiqə çəkdi. Çox rahat və sərfəlidir!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava05} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Raul Həsənov</h6>
            <p className="section__description">Müştəri</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "Müxtəlif avtomobil modelləri arasından seçim etmək imkanı məni çox sevindirdi. Dostlarla Qəbələyə səyahət üçün SUV kirayələdik. Avtomobilin təmizliyi və komfortu əla idi. Göstərdikləri dəstək xidmətinə görə təşəkkür edirəm. Şübhəsiz ki, yenidən istifadə edəcəyəm."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava06} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Rəvan Rəhimli</h6>
            <p className="section__description">Müştəri</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "Bakıdakı iş görüşüm üçün lüks avtomobil icarəyə götürdüm. Hər şey çox peşəkar şəkildə təşkil olunmuşdu. Avtomobil vaxtında gətirildi və gözlədiyimdən də yaxşı vəziyyətdə idi. Rent a car xidmətləri işgüzar səfərlər üçün ideal seçimdir."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava07} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Sənan Abbasov</h6>
            <p className="section__description">Müştəri</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "Tətil zamanı xaricdən qonaqlarımız üçün avtomobil icarəyə götürdük. Avtomobil tam sığortalı idi və heç bir əlavə xərc tələb olunmadı. Xidmət personalı çox mehriban və yardımsevər idi. Çox məmnun qaldıq və gələcəkdə də mütləq yenidən istifadə edəcəyik."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava08} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Araz Tağızadə</h6>
            <p className="section__description">Müştəri</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;

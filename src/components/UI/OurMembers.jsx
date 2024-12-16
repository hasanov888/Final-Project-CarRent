import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
// import ava01 from "../../assets/all-images/ava-1.jpg";
// import ava02 from "../../assets/all-images/ava-2.jpg";
// import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/raul.png"
import ava05 from "../../assets/all-images/revan.png"
import ava06 from "../../assets/all-images/senan.png"
import ava07 from "../../assets/all-images/araz.png"

const OUR__MEMBERS = [
  {
    name: "Raul Həsənov",
    experience: "10 illik təcrübə",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava04,
  },

  {
    name: "Rəvan Rəhimli",
    experience: "8 illik təcrübə",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava05,
  },

  {
    name: "Sənan Abbasov",
    experience: "6 illik təcrübə",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava06,
  },

  {
    name: "Araz Tağızadə",
    experience: "7 illik təcrübə",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava07,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;

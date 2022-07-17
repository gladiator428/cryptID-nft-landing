import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container, MeetCard } from "components";
import { MeetSectionWrapper, MeetTitle } from "./MeetTeamSection.styles";
import { Polygon1, Polygon2 } from "../PolygonSection/PolygonSection.styles";

import polygonImg from "assets/images/polygon.png";
import { Autoplay } from "swiper";

// User Images
import ML from "assets/images/MaxLingenfelter.png";
import SO from "assets/images/ShawnaOlachea.png";
import JC from "assets/images/JenniferCooper.png";
import LN from "assets/images/LindsayNielson.png";
import MR from "assets/images/McKenzieVanDorne-Rice.png";
import TC from "assets/images/ToddCooper.png";
import ZT from "assets/images/ZachThomson.png";

const MeetTeamSection: React.FC = () => {
  const [poly1, setPoly1] = useState("");
  const [poly2, setPoly2] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let poly: any = [];
    for (let i = 1; i <= 4; i++) {
      let temp = document.getElementById("poly" + i);
      poly.push({ y: temp?.getBoundingClientRect().y, elem: temp });
    }
    if (poly[0].y < window.innerHeight && poly[3].y > -window.innerHeight) {
      // console.log(poly[0].elem.getAttribute("id"));
      setPoly1(
        `translateY(${poly[0].y * 0.08 * -1}%) translateX(${
          poly[0].y * 0.03 * -1
        }%) rotate(${poly[0].y * 0.05}deg)`
      );
      setPoly2(
        `translateY(${poly[0].y * 0.08 * -1}%) translateX(${
          poly[0].y * 0.03 * -1
        }%) rotate(${poly[0].y * 0.05 * -1}deg)`
      );
    }
  };

  return (
    <MeetSectionWrapper>
      <Polygon1
        className="polygon"
        src={polygonImg.src}
        id="poly1"
        alt="polygon1"
        transform={poly1}
      />
      <Polygon2
        className="polygon"
        src={polygonImg.src}
        id="poly2"
        alt="polygon2"
        transform={poly2}
      />
      <Container>
        <MeetTitle id="team" className="gradient-font">
          Meet The Team
        </MeetTitle>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          modules={[Autoplay]}
          loopFillGroupWithBlank={false}
          className="mySwiper"
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            475: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 4,
            },
            1600: {
              slidesPerView: 5,
            },
            1800: {
              slidesPerView: 6,
            },
          }}
        >
          {/* Start Of Staff Cards */}
          <SwiperSlide>
            <MeetCard
              img={ML.src}
              name="Max"
              desc="Max Lingenfelter is a young discord developer, web developer, and entrepreneur. A lover of people and all things tech-related, he loves adventures and experiencing new things."
            />
          </SwiperSlide>
          <SwiperSlide>
            <MeetCard
              img={SO.src}
              name="Shawna"
              desc="Shawna Olachea currently works at Liquid Studios Entertainment as a Film/Television Talent Manager. She is a brand specialist and Content Producer."
            />
          </SwiperSlide>
          <SwiperSlide>
            <MeetCard
              img={JC.src}
              name="Jennifer"
              desc="Jennifer Cooper is a founding member of the Supernatural University Team and has worked in the entertainment industry since 2006. Her roles have included acting, screenwriting and various other positions in film production."
            />
          </SwiperSlide>
          <SwiperSlide>
            <MeetCard
              img={LN.src}
              name="Lindsay"
              desc="Lindsay Nielson, Viceroy of The Supernatural University, she is an entertainer and storyteller by nature. She is an amazing writer, actress and content creator."
            />
          </SwiperSlide>
          <SwiperSlide>
            <MeetCard
              img={MR.src}
              name="McKenzie"
              desc="McKenzie Van Dorne-Rice is an Award-winning Female Film Producer and President of Liquid Studios Entertainment. She has worked in the entertainment industry for 15+ years. She is a talent manager and co-creator of The Supernatural University Transmedia Universe."
            />
          </SwiperSlide>
          <SwiperSlide>
            <MeetCard
              img={TC.src}
              name="Todd"
              desc="Todd Cooper is an author who has also worked off and on in the film industry for 8 years. He is part of the social media team for The Supernatural Universe Transmedia Universe."
            />
          </SwiperSlide>
          <SwiperSlide>
            <MeetCard
              img={ZT.src}
              name="Zach"
              desc="Zach Thomson is an Award-winning Film Director and Producer. He has worked in the entertainment industry for 25+ years. He is the creator of The Supernatural University Transmedia Universe. "
            />
          </SwiperSlide>

          {/* End Of Staff Cards */}
        </Swiper>
      </Container>
    </MeetSectionWrapper>
  );
};

export default MeetTeamSection;

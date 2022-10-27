import React from "react";
import "./Testimonials.css";
import cd from "../../assets/cd.jpg";
import utn from "../../assets/utn1.png";
import hombre from "../../assets/hombre.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: cd,
    name: "CoderHouse",
    review:
      "I was in the top 10 of students in React, the courses completed on this platform are web development, javascript and React",
  },
  {
    avatar: utn,
    name: "UTN.BA",
    review:
      "The courses I completed on this platform were Python, beginner, advanced and advanced level.",
  },
  {
    avatar: hombre,
    name: "Me",
    review:
      "Complementing the courses, I am self-taught and I like to fully immerse myself in the subject I am studying, searching forums, talking to other people and reading documentation of the program I am studying.",
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Knowledge</h5>
      <h2>Courses</h2>
      <Swiper
        className='container testimonials__container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} style={{ backgroundSize: "cover" }} alt='' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

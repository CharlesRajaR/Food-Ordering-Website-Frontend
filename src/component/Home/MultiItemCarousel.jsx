import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
import './topMeal'
import { topMeals } from "./topMeal";
import CarouselItem from "./CarouselItem";

const MutiItemCarousel = () => {
  var settings = {
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:5,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false
}

  return (
    <div>
      <div>
        <Slider {...settings}>
            { topMeals.map((item) => <CarouselItem images={item.image} title={item.title}/>)}
        </Slider>
      </div>
    </div>
  )
}

export default MutiItemCarousel

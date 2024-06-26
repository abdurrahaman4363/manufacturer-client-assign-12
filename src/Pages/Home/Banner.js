import React from 'react';
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner4.jpg'

const Banner = () => {
    return (
        <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img style={{height:'600px;'}} src={banner1} alt="" class="w-full"/>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
            <a href="#slide4" class="btn btn-circle">❮</a> 
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full">
          <img style={{height:'600px'}} src={banner2} alt="" class="w-full"/>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
            <a href="#slide1" class="btn btn-circle">❮</a> 
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" class="carousel-item relative w-full">
          <img style={{height:'600px'}} src={banner3} alt="" class="w-full"/>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
            <a href="#slide2" class="btn btn-circle">❮</a> 
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" class="carousel-item relative w-full">
          <img style={{height:'600px'}} src={banner4} alt="" class="w-full"/> 
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
            <a href="#slide3" class="btn btn-circle">❮</a> 
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;
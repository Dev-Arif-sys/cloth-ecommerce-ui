import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img1 from '../../../images/hdm141-removebg-preview.png';
import './Header.css';

import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Header = () => {
    return (
        <div className='carousel container'>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                <SwiperSlide>
                    <div className='d-flex p-4 mx-5  align-items-center'>
                        <div className='carousel-info'>
                            <h1>Harley Davidson T Shirt</h1>
                            <h6>under reasonable prices</h6>
                            <div className='price'>
                                <p>FROM</p>
                                <h1>$73</h1>
                            </div>
                            <button className='buying-btn'>Start buying</button>
                        </div>
                        <img className='carousel-img' src={img1} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='d-flex p-4 align-items-center '>
                        <div className='carousel-info'>
                            <h1>Harley Davidson T Shirt</h1>
                            <h6>under reasonable prices</h6>
                            <div className='price'>
                                <p>FROM</p>
                                <h1>$65</h1>
                            </div>
                            <button className='buying-btn'>Start buying</button>
                        </div>
                        <img className='carousel-img' src={img1} />
                    </div></SwiperSlide><SwiperSlide>
                    <div className='d-flex p-4 align-items-center'>
                        <div className='carousel-info'>
                            <h1>Harley Davidson T Shirt</h1>
                            <h6>under reasonable prices</h6>
                            <div className='price'>
                                <p>FROM</p>
                                <h1>$66</h1>
                            </div>
                            <button className='buying-btn'>Start buying</button>
                        </div>
                        <img className='carousel-img' src={img1} />

                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Header;
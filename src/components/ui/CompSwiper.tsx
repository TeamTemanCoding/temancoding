import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Portofolio from './Portofolio';

const CompSwiper = () => {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
                dynamicMainBullets: 1,
            }}
            navigation={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            initialSlide={5}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide><Portofolio /></SwiperSlide>
            <SwiperSlide><Portofolio /></SwiperSlide>
            <SwiperSlide><Portofolio /></SwiperSlide>
            <SwiperSlide><Portofolio /></SwiperSlide>
            <SwiperSlide><Portofolio /></SwiperSlide>
            <SwiperSlide><Portofolio /></SwiperSlide>
            <SwiperSlide><Portofolio /></SwiperSlide>
            <SwiperSlide><Portofolio /></SwiperSlide>
        </Swiper>
    )
}

export default CompSwiper
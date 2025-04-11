import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
import Portofolio from './Portofolio';

const CompSwiper = () => {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
                dynamicMainBullets: 1,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
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
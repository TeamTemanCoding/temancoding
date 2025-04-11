import { Button } from '@heroui/react'
import { ArrowRight } from '@phosphor-icons/react'
import React from 'react'

const HeroBanner = () => {
    return (
        <div className="bg-[url('/images/backgrounds/1.png')] bg-cover bg-center h-[303px] flex flex-col items-center justify-center text-white text-4xl font-bold mt-44">
            <h5 className='leading-[94%] text-center text-[32px]'>Jadikan Bisnis Anda <br /> Lebih Profesional & Digital!</h5>
            <p className='leading-[94%] text-center text-[18px] max-w-[600px] mt-3'>Diskusikan kebutuhan website Anda dengan tim ahli kami dan dapatkan solusi terbaik yang sesuai dengan visi bisnis Anda.</p>
            <Button className='bg-white text-black rounded-[12px] font-semibold px-6 mt-10'>Konsultasi Sekarang <ArrowRight weight='bold'/></Button>
        </div>
    )
}

export default HeroBanner
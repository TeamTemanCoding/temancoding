import { Button } from '@heroui/react'
import { ArrowRight } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
    return (
        <div className="bg-[url('/images/backgrounds/1.png')] bg-cover bg-center h-[303px] flex flex-col items-center justify-center text-white text-4xl font-bold mt-44 px-3">
            <h5 className='leading-[94%] text-center text-[25px] sm:text-[32px]'>Jadikan Bisnis Anda <br /> Lebih Profesional & Digital!</h5>
            <p className='leading-[94%] text-center text-[13px] sm:text-[18px] max-w-[300px] sm:max-w-[600px] mt-3'>Diskusikan kebutuhan website Anda dengan tim ahli kami dan dapatkan solusi terbaik yang sesuai dengan visi bisnis Anda.</p>
            <Link href="https://wa.me/6281330409441?text=Halo, Saya tertarik untuk berkonsultasi mengenai order di teman coding." target="_blank">
            <Button className='bg-white text-black rounded-[12px] font-semibold px-6 mt-10'>Konsultasi Sekarang <ArrowRight weight='bold'/></Button>
            </Link>
        </div>
    )
}

export default HeroBanner
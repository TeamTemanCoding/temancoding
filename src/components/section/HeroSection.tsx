import React from 'react'
import SectionContainer from '../layouts/SectionContainer'
import Link from 'next/link'
import { ArrowRight, CaretRight } from '@phosphor-icons/react'
import { Button } from '@heroui/react'

const HeroSection = () => {
    return (
        <SectionContainer className="h-screen max-h-[900px] flex flex-col items-center justify-center *:text-zinc-50 bg-[url('/images/backgrounds/hero.svg')] bg-cover bg-center" id='home'>
            <div className='flex flex-col items-center gap-2 -mt-16 sm:-mt-0'>
                <div className='flex items-center gap-2 sm:gap-3'>
                    <span className='text-[10px] sm:text-[16px] bg-zinc-50/25 px-2 py-1 rounded-full'>
                        Why Teman Coding?
                    </span>
                    <Link href="/#benefits" className="flex gap-2 items-center text-[10px] sm:text-[16px] tracking-[0.25px] hover:opacity-80">Discover all the benefits <ArrowRight size={17} className='shrink-0' /></Link>
                </div>
                <h1 className='text-[32px] max-w-[460px] text-center leading-[50px] font-bold'>Elevate <span className='bg-gradient-to-r from-[#2439CC] via-[#167ADB] to-[#00E2F2] text-transparent bg-clip-text'>Your Business</span> with a <span className='bg-gradient-to-r from-[#2439CC] via-[#167ADB] to-[#00E2F2] text-transparent bg-clip-text'>Powerful</span> Website</h1>
                <p className='max-w-[400px] sm:max-w-[500px] text-center font-thin text-[19px] sm:text-[22px]'>Custom-Built, High-Quality Websites for Your Digital Success</p>
                <div className='mt-6 flex items-center'>
                    <Link href="/#pricing">
                        <Button className='bg-white !text-black rounded-full font-semibold px-6'>View Offers <CaretRight weight='bold' size={17} color='text-zinc-800' /></Button>
                    </Link>
                    <Link href="https://wa.me/6281330409441?text=Halo, Saya ingin berkonsultasi mengenai order di teman coding." className='text-[14px] text-nowrap sm:text-[15px] !font-thin hover:underline underline-offset-2 text-zinc-50 ml-4'>Service Consultation</Link>
                </div>
            </div>
        </SectionContainer>
    )
}

export default HeroSection

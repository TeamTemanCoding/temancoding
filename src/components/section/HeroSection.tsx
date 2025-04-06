import React from 'react'
import SectionContainer from '../layouts/SectionContainer'
import Link from 'next/link'
import { ArrowRight, CaretRight } from '@phosphor-icons/react'
import { Button } from '@heroui/react'

const HeroSection = () => {
    return (
        <SectionContainer className="h-screen flex flex-col items-center justify-center *:text-zinc-50 bg-[url('/images/backgrounds/hero.svg')] bg-cover bg-center">
            <div className='flex flex-col items-center gap-2 -mt-24 sm:-mt-0'>
                <div className='flex items-center sm:flex-row flex-col gap-3'>
                    <span className='text-[14px] sm:text-[15px] bg-zinc-50/25 px-2 py-1 rounded-full'>
                        Why Teman Coding?
                    </span>
                    <Link href="/about" className="flex gap-2 items-center text-[16px] tracking-[0.25px]">Discover all the benefits <ArrowRight size={17} /></Link>
                </div>
                <h1 className='text-[32px] max-w-[460px] text-center leading-[50px] font-bold'>Elevate <span className='bg-gradient-to-r from-[#2439CC] via-[#167ADB] to-[#00E2F2] text-transparent bg-clip-text'>Your Business</span> with a <span className='bg-gradient-to-r from-[#2439CC] via-[#167ADB] to-[#00E2F2] text-transparent bg-clip-text'>Powerful</span> Website</h1>
                <p className='max-w-[400px] sm:max-w-[500px] text-center font-thin text-[19px] sm:text-[22px]'>Custom-Built, High-Quality Websites for Your Digital Success</p>
                <div className='mt-6 flex items-center'>
                    <Button className='bg-white !text-black rounded-full font-semibold px-6'>View Offers <CaretRight weight='bold' size={17} /></Button>
                    <Link href="/contact" className='text-[14px] text-nowrap sm:text-[15px] !font-thin hover:underline underline-offset-2 text-zinc-50 ml-4'>Service Consultation</Link>
                </div>
            </div>
        </SectionContainer>
    )
}

export default HeroSection

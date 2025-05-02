import { Button } from '@heroui/react'
import { CaretRight } from '@phosphor-icons/react'
import Image from 'next/image'
import React from 'react'

const Portofolio = () => {
    return (
        <div className='max-w-[1000px] place-items-center mx-auto'>
            <div className="bg-[#042246] p-5 rounded-[9px] w-[250px]  grid grid-cols-1 lg:grid-cols-2 lg:bg-transparent lg:w-full lg:rounded-none gap-1 mx-auto lg:gap-10">
                <Image src={"/images/portofolio/portofolio1.png"} alt='1' width={485} height={485} className='mb-5 lg:mb-0' />
                <div className='text-left flex flex-col gap-5'>
                    <h4 className='text-[20px] lg:text-[38px] font-semibold'>Neonest.id Website</h4>
                    <div className='flex items-center gap-3'>
                        <Image src={"./images/icons/nextjs.svg"} alt='nextjs' width={38} height={38} className='w-[28px] h-[28px] lg:w-[38px] lg:h-[38px]' />
                        <Image src={"./images/icons/typescript.svg"} alt='nextjs' width={38} height={38} className='w-[28px] h-[28px] lg:w-[38px] lg:h-[38px]' />
                        <Image src={"./images/icons/tailwind.svg"} alt='nextjs' width={38} height={38} className='w-[28px] h-[28px] lg:w-[38px] lg:h-[38px]' />
                    </div>
                    <p className='max-w-[450px] text-[12px] lg:text-[20px] font-thin'>NeoNest provides professional web development, creative design, and social media boosting services to help your brand grow and stand out online.</p>
                    <div className='mt-2'>
                        <Button className='rounded-full w-[120px] lg:w-[140px] h-[38px] bg-white font-medium '>Live Demo <CaretRight weight='bold' className='shrink-0' /> </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portofolio
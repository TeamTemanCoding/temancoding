import { Button } from '@heroui/react'
import { CaretRight } from '@phosphor-icons/react'
import Image from 'next/image'
import React from 'react'

const Portofolio = () => {
    return (
        <div className='grid grid-cols-2 gap-7 max-w-[1000px] mx-auto place-items-center'>
            <Image src={"/images/portofolio/portofolio1.png"} alt='1' width={485} height={485} />
            <div className='text-left flex flex-col gap-5'>
                <h4 className='text-[38px] font-semibold'>Neonest.id Website</h4>
                <div className='flex items-center gap-3'>
                    <Image src={"./images/icons/nextjs.svg"} alt='nextjs' width={38} height={38} />
                    <Image src={"./images/icons/typescript.svg"} alt='nextjs' width={38} height={38} />
                    <Image src={"./images/icons/tailwind.svg"} alt='nextjs' width={38} height={38} />
                </div>
                <p className='max-w-[450px] text-[20px] font-thin'>NeoNest provides professional web development, creative design, and social media boosting services to help your brand grow and stand out online.</p>
                <div className='mt-2'>
                    <Button className='rounded-full w-[140px] h-[38px] bg-white font-medium '>Live Demo <CaretRight weight='bold' /></Button>
                </div>
            </div>
        </div>
    )
}

export default Portofolio
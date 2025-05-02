import React from 'react'
import SectionContainer from '../layouts/SectionContainer'
import CompSwiper from '../ui/CompSwiper'

const PortofolioSection = () => {
    return (
        <SectionContainer className='h-full !px-0 sm:!px-24 sm:-mt-0 lg:h-[950px]' id='portofolio' container>
            <div className='text-center px-6'>
                <h2 className='text-[33px] sm:text-[40px] font-bold'>Our <span className='bg-gradient-to-r from-[#474FDD] via-[#3773DA] to-[#08BCE9] text-transparent bg-clip-text'>Portofolio</span></h2>
                <p className='text-[14px] sm:text-[20px]'>A showcase of our finest projects and innovations.</p>
            </div>
            <div className='max-w-full -mt-12 sm:mt-0'>
                <CompSwiper />
            </div>
        </SectionContainer>
    )
}

export default PortofolioSection
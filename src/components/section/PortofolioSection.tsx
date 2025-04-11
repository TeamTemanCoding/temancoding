import React from 'react'
import SectionContainer from '../layouts/SectionContainer'
import CompSwiper from '../ui/CompSwiper'

const PortofolioSection = () => {
    return (
        <SectionContainer>
            <div className='text-center'>
                <h2 className='text-[40px] font-bold'>Our <span className='bg-gradient-to-r from-[#474FDD] via-[#3773DA] to-[#08BCE9] text-transparent bg-clip-text'>Portofolio</span></h2>
                <p className='text-[20px]'>A showcase of our finest projects and innovations.</p>
            </div>
            <div className=''>
                <CompSwiper />
            </div>
        </SectionContainer>
    )
}

export default PortofolioSection
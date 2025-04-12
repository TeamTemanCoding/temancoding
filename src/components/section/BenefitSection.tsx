import React from 'react'
import SectionContainer from '../layouts/SectionContainer'
import Image from 'next/image'
import CompAccordion from '../ui/CompAccordion'

const BenefitSection = () => {
    return (
        <SectionContainer className='h-full -mt-20 sm:-mt-0 sm:h-[760px]' id='benefits' container>
            <div className='grid grid-rows-2 sm:grid-cols-2 items-center sm:place-items-center sm:max-w-[1300px] sm:mx-auto sm:gap-16'>
                <Image src={"./images/benefits.svg"} alt='benefit' width={550} height={550} draggable={false} className='w-[650px] sm:w-[550px]' />
                <div className='h-auto -mt-16 sm:-mt-0'>
                    <h2 className='text-[40px] font-bold z-50'>Why Choose <span className='text-[#5B86E5]'>Us?</span></h2>
                    <div className='overflow-hidden mt-8 sm:mt-8'>
                        <div className='h-fit bg-[#042246] rounded-[17px] w-auto sm:w-[600px] px-5 py-2'>
                            <CompAccordion />
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

export default BenefitSection
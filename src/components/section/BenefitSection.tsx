import React from 'react'
import SectionContainer from '../layouts/SectionContainer'
import Image from 'next/image'
import CompAccordion from '../ui/CompAccordion'
import { motion } from 'framer-motion'
import useInView from '~/hooks/useInView'

const BenefitSection = () => {
    const [inView, refElement] = useInView(0.080) // 8%

    return (
        <SectionContainer className='h-full mt-20 sm:-mt-0 sm:h-[700px]' id='benefits' container>
            <div className='flex items-center justify-center sm:max-w-[1300px] sm:mx-auto sm:gap-16 h-full relative'>
                <Image src={"/images/benefits.svg"} alt='benefit' width={550} height={550} draggable={false} className='w-[650px] sm:w-[550px] hidden lg:block' />

                <motion.div
                    className='h-auto -mt-16 sm:-mt-0'
                    ref={refElement}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h2 className='text-[32px] sm:text-[40px] text-center lg:text-left font-bold z-50'>
                        Why Choose <span className='text-[#5B86E5]'>Us?</span>
                    </h2>
                    <div className='overflow-hidden mt-8 sm:mt-8'>
                        <div className='h-fit bg-[#042246] rounded-[17px] w-auto sm:w-[600px] px-5 py-2'>
                            <CompAccordion />
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionContainer>
    )
}

export default BenefitSection

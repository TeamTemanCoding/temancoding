import React from 'react'
import SectionContainer from '../layouts/SectionContainer'
import Image from 'next/image'

const BenefitSection = () => {
    return (
        <SectionContainer className='h-screen'>
            <Image src={"./images/benefits.svg"} alt='benefit' width={550} height={550} />
            <div>
                <h2>Why Choose Us?</h2>
            </div>
        </SectionContainer>
    )
}

export default BenefitSection
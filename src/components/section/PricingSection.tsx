import React from 'react'
import SectionContainer from '../layouts/SectionContainer'
import PriceCard from '../ui/PriceCard'
import EachUtils from '~/utils/EachUtils'
import { pricings } from '~/data/datas'

const PricingSection = () => {
    return (
        <SectionContainer className='h-fit' id='pricing' container>
            <div className="max-w-[1200px] mx-auto">

                <div className='text-center'>
                    <small className='text-[26px] font-semibold'>Building Price</small>
                    <h2 className='text-[38px] font-bold leading-[52px]'>Website Development Service</h2>
                </div>
                <div className="mt-24 place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">   
                    <EachUtils of={pricings} render={data => (<PriceCard title={data.title} desc={data.description} price={data.price.toLocaleString('id-ID', {
                        minimumFractionDigits: 0,
                    })} features={data.features} isPopular={data.isPopular} key={data.id} />)} />
                </div>
            </div>
        </SectionContainer>
    )
}

export default PricingSection
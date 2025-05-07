import React from 'react'
import SectionContainer from '../layouts/SectionContainer'
import PriceCard from '../ui/PriceCard'
import EachUtils from '~/utils/EachUtils'
import { pricings } from '~/data/datas'
import { motion } from 'framer-motion'
import useInView from '~/hooks/useInView'

const PricingSection = () => {
    const [inView, refElement] = useInView(0.050) // 5% 

    return (
        <SectionContainer className='h-fit' id='pricing' container>
            <div className="max-w-[1200px] mx-auto">
                <div className='text-center'>
                    <small className='text-[19px] sm:text-[26px] font-semibold'>Building Price</small>
                    <h2 className="text-[27px] sm:text-[38px] font-bold leading-[42px] sm:leading-[52px] text-white">
                        <span>
                            Website{" "}
                            <span className="text-transparent bg-gradient-to-r from-[#474FDD] via-[#3773DA] to-[#08BCE9] bg-clip-text">
                                Development{" "}
                            </span>
                        </span>
                        <span className="block lg:hidden"></span>
                        <span className="text-transparent bg-gradient-to-r from-[#474FDD] via-[#3773DA] to-[#08BCE9] bg-clip-text">
                            Service
                        </span>
                    </h2>
                </div>

                <motion.div
                    className="mt-24 place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10"
                    ref={refElement}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <EachUtils
                        of={pricings}
                        render={(data, index) => (
                            <motion.div
                                key={data.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                                transition={{
                                    duration: 0.73,
                                    delay: index * 0.2,
                                    ease: 'easeOut',
                                }}
                            >
                                <PriceCard
                                    title={data.title}
                                    desc={data.description}
                                    price={data.price.toLocaleString('id-ID', {
                                        minimumFractionDigits: 0,
                                    })}
                                    features={data.features}
                                    isPopular={data.isPopular}
                                />
                            </motion.div>
                        )}
                    />
                </motion.div>
            </div>
        </SectionContainer>
    )
}

export default PricingSection

import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from '@heroui/react'
import { ArrowRight, Check, X } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import EachUtils from '~/utils/EachUtils';

interface PriceCardProps {
    title: string;
    price: string;
    desc: string;
    features: {
        label: string;
        isInclude: boolean;
    }[];
    isPopular?: boolean;
}

const PriceCard = ({ title, price, desc, features, isPopular }: PriceCardProps) => {
    const message = `Halo, saya tertarik dengan ${title}. Bisakah Anda memberikan saya lebih banyak informasi?`;
    return (
        <Card className={`relative w-[270px] h-[420px] rounded-[14px] bg-white shadow-lg !px-4 ${isPopular ? "bg-[url('/images/backgrounds/flag.svg')] bg-no-repeat bg-right-top" : ""}`}>
            <Image src={"./images/icons/crowd.svg"} alt='crowd' width={32} height={32} className='absolute right-1 top-1' draggable={false} />
            <CardHeader className='flex-col'>
                <div>
                    <h4 className='font-semibold text-[23px] mt-5 text-center'>{title}</h4>
                    <div className='mt-4'>
                        <p className="text-[13px] font-semibold">Start from</p>
                        <h4 className="font-semibold text-[20px]"><sup>Rp</sup> {price} /project</h4>
                        <p className='text-[10px] mt-2 max-w-[266px] line-clamp-2'>{desc}</p>
                    </div>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <ul>
                    <EachUtils of={features} render={(data, i) => (
                        <li className={`text-[14px] font-normal flex items-center gap-4 mt-1 ${!data.isInclude && 'line-through opacity-40'}`} key={i + 1}><span>{data.isInclude ? (<Check weight='bold' />) : (<X weight='bold' />)}</span>{data.label}</li>
                    )} />
                </ul>
            </CardBody>
            <CardFooter className="justify-center pb-7">
                <Link href={`https://wa.me/6281330409441?text=${message}`} target="_blank">
                    <Button className="bg-gradient-to-r from-[#474FDD] via-[#3773DA] to-[#08BCE9] text-zinc-50 text-[13px] rounded-full w-[173px] h-[40px] flex items-center justify-center gap-2">
                        <Image src="/images/icons/whatsapp.svg" alt="whatsapp logo" width={22} height={22} />
                        Order Now
                        <ArrowRight weight="bold" size={15} />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default PriceCard
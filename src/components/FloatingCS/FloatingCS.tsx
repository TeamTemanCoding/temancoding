import Image from 'next/image'
import React from 'react'

const FloatingCS = () => {
    return (
        <div className='z-50 bg-white/50 h-[45px] w-[45px] fixed right-10 bottom-7 flex items-center justify-center rounded-full shadow-lg cursor-pointer'>
            <Image
                src={'./images/icons/cs.svg'}
                alt='floatingCS'
                width={30}
                height={30}
                draggable={false}
                className=' z-50' />
        </div>
    )
}

export default FloatingCS
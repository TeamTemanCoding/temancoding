import Image from 'next/image'
import React from 'react'
import CS from './CS'

const FloatingCS = () => {
    return (
        <React.Fragment>
            <CS />
            <div className='z-50 bg-white/50 h-[45px] w-[45px] fixed right-7 sm:right-10 bottom-4 sm:bottom-7 flex items-center justify-center rounded-full shadow-lg cursor-pointer'>
                <Image
                    src={'./images/icons/cs.svg'}
                    alt='floatingCS'
                    width={30}
                    height={30}
                    draggable={false}
                    className='z-50' />
            </div>
        </React.Fragment>
    )
}

export default FloatingCS
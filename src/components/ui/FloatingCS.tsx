import Image from 'next/image';
import React, { useState } from 'react';
import CS from './CS';
import { X } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';

const FloatingCS = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <React.Fragment>
            <AnimatePresence>
                {show && (
                    <motion.div
                        initial={{ scale: 0, y: 0 }}
                        animate={{ scale: 1, y: 0, x: -5}}
                        exit={{ scale: 0, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed right-7 sm:right-10 bottom-[70px] sm:bottom-20 z-50 origin-bottom-right"
                    >
                        <CS />
                    </motion.div>
                )}
            </AnimatePresence>

            <div
                className="z-50 bg-white/50 h-[45px] w-[45px] fixed right-7 sm:right-10 bottom-4 sm:bottom-7 flex items-center justify-center rounded-full shadow-lg cursor-pointer"
                onClick={() => setShow(!show)}
            >
                {show ? (
                    <X weight="bold" size={30} color="black" />
                ) : (
                    <Image
                        src={'/images/icons/cs.svg'}
                        alt="floatingCS"
                        width={30}
                        height={30}
                        draggable={false}
                        className="z-50"
                    />
                )}
            </div>
        </React.Fragment>
    );
};

export default FloatingCS;

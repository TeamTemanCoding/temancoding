"use client"

import React from 'react'
import { HeroUIProvider } from '@heroui/react'
import Footer from '~/components/layouts/footer/Footer'
import NavigationBar from '~/components/layouts/navbar/NavigationBar'

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <HeroUIProvider>
            <NavigationBar />
            <main>
                {children}
            </main>
            <Footer />
        </HeroUIProvider>
    )
}

export default Provider
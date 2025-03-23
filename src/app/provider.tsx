"use client"

import React from 'react'
import Footer from '~/components/layouts/footer/Footer'
import NavigationBar from '~/components/layouts/navbar/NavigationBar'

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <React.Fragment>
            <NavigationBar />
            <main>
                {children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Provider
import React from 'react'

const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-screen'>
            {children}
        </div>
    )
}

export default PageContainer
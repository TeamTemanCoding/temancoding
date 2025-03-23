import React from 'react'

const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-screen'>
            {children}
        </div>
    )
}

PageContainer.displayName = "PageContainer"

export default PageContainer
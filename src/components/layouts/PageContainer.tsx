import React from 'react'

const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='relative overflow-x-hidden'>
            {children}
        </div>
    )
}

PageContainer.displayName = "PageContainer"

export default PageContainer
import React from 'react'

const PageContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`relative overflow-x-hidden ${className}`}>
            {children}
        </div>
    )
}

PageContainer.displayName = "PageContainer"

export default PageContainer
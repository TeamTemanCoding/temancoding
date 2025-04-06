import React, { forwardRef } from "react";

type SectionContainerProps = {
    className?: string;
    children?: React.ReactNode;
};

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
    ({ children, className,  }, ref) => {
        return (
            <div className="relative">
                <section ref={ref} className={`py-12  px-6 sm:px-24 ${className}`}>
                    {children}
                </section>
            </div>
        );
    }
);

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;

import React, { forwardRef } from "react";

type SectionContainerProps = {
    id?: string;
    className?: string;
    children?: React.ReactNode;
    container?: boolean;
};

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
    ({ children, id, className, container }, ref) => {
        return (
            <div className="relative">
                <section ref={ref} className={`py-12 px-6  ${container ? "container mx-auto" : "sm:px-24"} ${className}`} id={id}>
                    {children}
                </section>
            </div>
        );
    }
);

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;

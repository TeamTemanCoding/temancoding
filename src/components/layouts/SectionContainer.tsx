import React, { forwardRef } from "react";

type SectionContainerProps = {
    children?: React.ReactNode;
};

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
    ({ children }, ref) => {
        return (
            <div className="relative">
                <section ref={ref} className="py-12">
                    {children}
                </section>
            </div>
        );
    }
);

export default SectionContainer;

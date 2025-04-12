import { Accordion, AccordionItem } from '@heroui/react'
import React from 'react'
import { benefits } from '~/data/datas';

const CompAccordion = () => {

    return (
        <Accordion selectionMode='single' dividerProps={{ className: "bg-zinc-50/40" }} className='bg-transparent' defaultSelectedKeys={["5"]}>
            {/* <EachUtils
                of={benefits}
                render={(data) => (
                    <AccordionItem key={data.id} aria-label={data.title} title={data.title}>
                        {data.description}
                    </AccordionItem>
                )}
            /> */}
            {benefits.map((data) => (
                <AccordionItem key={data.id} aria-label={data.title} title={data.title} classNames={{ title: "text-zinc-50" }}>
                    {data.description}
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default CompAccordion
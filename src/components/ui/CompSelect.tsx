import { Select, SelectItem } from '@heroui/react'
import { Globe } from '@phosphor-icons/react'
import React from 'react'

interface IPropsSelect {
  item: string[];
  className?: string;
  onChange?: (value: string) => void;
  defaultSelected?: string[];
}

const CompSelect = ({ ...props }: IPropsSelect) => {
  return (
    <Select
      defaultSelectedKeys={props.defaultSelected}
      aria-label="Language selection"
      className="text-zinc-50 min-w-[120px]"
      variant="flat"
      classNames={{
        trigger: "bg-transparent data-[hover=true]:bg-transparent border-0",
        value: "!text-zinc-50",
        innerWrapper: "bg-transparent text-zinc-50",
        mainWrapper: "bg-transparent border-0 text-zinc-50",
      }}
      popoverProps={{
        classNames: {
          content: "bg-zinc-50 border-0 w-full sm:w-auto !text-zinc-800",
        },
      }}
      startContent={<Globe className="text-zinc-50 text-2xl" weight="bold" />}
    >
      {props.item.map((lang) => (
        <SelectItem key={String(lang.toLocaleLowerCase())}>
          {lang}
        </SelectItem>
      ))}
    </Select>
  )
}

export default CompSelect
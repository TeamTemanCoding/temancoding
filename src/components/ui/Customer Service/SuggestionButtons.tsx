import { Button } from '@heroui/react'

const SuggestionButtons = ({
  suggestions,
  onSelect
}: {
  suggestions: string[]
  onSelect: (message: string) => void
}) => {
  if (suggestions.length === 0) return null

  return (
    <div className="mt-3 space-y-2">
      <p className='text-[10px] text-white/60'>Coba pertanyaan ini:</p>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((sug, idx) => (
          <Button
            key={idx}
            size="sm"
            variant="flat"
            className="text-xs text-white bg-[#2E2B8F] hover:bg-[#413DB8] px-3 py-1 rounded-lg"
            onClick={() => onSelect(sug)}
          >
            {sug}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default SuggestionButtons

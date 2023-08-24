'use client'

import { CircularProgress } from '@nextui-org/react'

const CharacterCounter = ({ text }: { text: string }) => {
  const maxCharacters = 280
  const progress = (text.length / maxCharacters) * 100
  const remainingCharacters = maxCharacters - text.length

  return (
    <div className="flex items-center">
      {text.length > 0 && (
        <CircularProgress
          aria-label="Remaining characters"
          value={progress}
          valueLabel={remainingCharacters.toString()}
          showValueLabel={text.length >= 260}
          formatOptions={{ style: 'decimal' }}
          classNames={{
            svg: `transition-width ${text.length < 260 ? 'w-[25px] h-[25px]' : 'w-[30px] h-[30px]'}`,
            indicator: `transition-none ${text.length >= 290 ? 'hidden' : ''} ${text.length < 260 ? 'stroke-[#1D9BF0]' : text.length >= 260 && text.length <= 279 ? 'stroke-[#FFD400]' : 'stroke-[#F4212E]'}`,
            track: `${text.length >= 290 ? 'hidden' : ''}`,
            value: `text-xs transition-all ${text.length >= 260 && text.length <= 279 ? 'text-white/50' : 'text-[#F4212E]'}`
          }}
          strokeWidth={1}
        />)}
    </div>
  )
}

export default CharacterCounter

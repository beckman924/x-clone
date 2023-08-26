'use client'

import { useRef, useState } from 'react'

import { addPost } from '../actions/add-post-action'
import ComposePostButton from './compose-post-button'
import CharacterCounter from './character-counter'

const ComposePost = ({
  userAvatarUrl
}: {
  userAvatarUrl: string
}) => {
  const formRef = useRef<HTMLFormElement>(null)
  const [text, setText] = useState('')

  return (
    <form ref={formRef} action={async (formData) => {
      await addPost(formData)
      formRef.current?.reset()
      setText('')
    }} className="flex flex-row p-3 gap-x-2 border-b border-white/20">
      <img className='rounded-full w-10 h-10 object-contain' src={userAvatarUrl} alt='userAvatar' />
      <div className='flex flex-1 flex-col gap-y-4'>
        <textarea
          name="content"
          rows={1}
          className="w-full text-xl bg-black placeholder-gray-500 mr-2 mb-2 outline-none"
          placeholder="What's on your mind?"
          style={{ resize: 'none', overflowY: 'auto', overflowX: 'hidden' }}
          onChange={(event) => {
            setText(event.target.value)
            const textarea = event.target
            textarea.style.height = 'auto'
            textarea.style.height =
              textarea.scrollHeight > 9 * parseFloat(getComputedStyle(textarea).lineHeight)
                ? `${9 * parseFloat(getComputedStyle(textarea).lineHeight)}px`
                : `${textarea.scrollHeight}px`

            if (event.target.value.length >= 281) {
              textarea.style.backgroundColor = '#8A0D20'
            } else {
              textarea.style.backgroundColor = 'transparent'
            }
          }}
        ></textarea>

        <span className='flex flex-row justify-end items-center gap-4'>
          <CharacterCounter text={text} />
          <ComposePostButton text={text} />
        </span>
      </div>
    </form>
  )
}

export default ComposePost

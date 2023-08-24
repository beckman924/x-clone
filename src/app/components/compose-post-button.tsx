'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

const ComposePostButton = ({ text }: { text: string }) => {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending || text.length === 0 || text.length > 280}
      type='submit'
      className="bg-sky-500 text-sm disabled:opacity-40 disabled:pointer-events-none font-bold rounded-full px-5 py-2 self-end">
      {pending ? 'Posting...' : 'Post'}
    </button>
  )
}

export default ComposePostButton

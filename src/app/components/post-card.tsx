'use client'

import Link from 'next/link'

import { Card, Avatar } from '@nextui-org/react'
import { IconMessageCircle, IconRepeat, IconHeart } from '@tabler/icons-react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default function PostCard ({
  userFullName,
  userName,
  avatarUrl,
  content,
  createdAt
}: {
  userFullName: string
  userName: string
  avatarUrl: string
  content: string
  createdAt: string
}) {
  return (
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
      <div className='p-3 flex gap-x-[10px]'>
        <Link href={`/${userName}`}>
          <Avatar radius="full" size="md" src={avatarUrl} />
        </Link>

        <div className='flex flex-col'>
          <span className="flex flex-row gap-1 items-center justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600 tracking-tight truncate max-w-[9rem] md:max-w-[15rem]">{userFullName}</h4>
            <h5 className="text-small tracking-tight text-default-400 truncate max-w-[5rem] md:max-w-[9rem]">@{userName}</h5>
            <p className='text-small tracking-tight text-default-400'>·</p>
            <p className='text-small tracking-tight text-default-400 truncate max-w-[5rem] md:max-w-full'>{dayjs().to(dayjs(createdAt))}</p>
          </span>

          <p className="text-small text-white">
            {content}
          </p>

          <div className="flex flex-row gap-3 mt-3">
            <button>
              <IconMessageCircle className='w-4 h-4' />
            </button>

            <button>
              <IconRepeat className='w-4 h-4' />
            </button>

            <button>
              <IconHeart className='w-4 h-4' />
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}

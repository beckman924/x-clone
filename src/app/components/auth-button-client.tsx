/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/indent */
'use client'

import { useRouter } from 'next/navigation'
import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { GitHubIcon, GoogleIcon } from './icons'

export function AuthButton ({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignInGithub = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${location.origin}/auth/callback`
        }
      })
    } catch (error) {
      console.error(error)
      router.refresh()
    }
  }

  const handleSignInGoogle = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${location.origin}/auth/callback`
        }
      })
    } catch (error) {
      console.error(error)
      router.refresh()
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <header>
      {
        session === null
          ? (
            <div className='flex flex-col gap-y-4'>
              <button onClick={handleSignInGoogle} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 gap-x-2">
                Sign in with Google
                <GoogleIcon />
              </button>

              <button onClick={handleSignInGithub} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 gap-x-2">
                Sign in with Github
                <GitHubIcon />
              </button>
            </div>
          )
          : (
            <button onClick={handleSignOut} className='pr-2 pt-1'>
              Sign out
            </button>
          )
      }

    </header>
  )
}

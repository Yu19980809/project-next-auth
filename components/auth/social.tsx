'use client'

import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

import { Button } from '@/components/ui/button'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export const Social = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')

  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT
    })
  }

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        onClick={() => onClick('google')}
        variant="outline"
        size="lg"
        className="w-full"
      >
        <FcGoogle className="w-5 h-5" />
      </Button>

      <Button
        onClick={() => onClick('github')}
        variant="outline"
        size="lg"
        className="w-full"
      >
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  )
}


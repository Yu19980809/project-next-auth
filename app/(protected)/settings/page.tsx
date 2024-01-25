'use client'

import { useCurrentUser } from '@/hooks/use-current-user'
import { signOut } from 'next-auth/react'

const SettingsPage = () => {
  const user = useCurrentUser()

  const handleClick = () => {
    signOut()
  }

  return (
    <div className="p-10 rounded-xl bg-white">
      <button onClick={handleClick}>
        Sign out
      </button>
    </div>
  )
}

export default SettingsPage

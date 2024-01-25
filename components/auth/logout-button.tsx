'use client'

import { logout } from '@/actions/logout'

export const LogoutButton = ({
  children
}: {
  children: React.ReactNode
}) => {
  const handleClick = () => {
    logout()
  }

  return (
    <span
      onClick={handleClick}
      className="cursor-pointer"
    >
      {children}
    </span>
  )
}

import Link from 'next/link'

import { Button } from '@/components/ui/button'

interface BackButtonProps {
  label: string
  href: string
}

export const BackButton = ({
  label,
  href
}: BackButtonProps) => {
  return (
    <Button
      asChild
      variant="link"
      size="sm"
      className="w-full font-normal"
    >
      <Link href={href}>
        {label}
      </Link>
    </Button>
  )
}


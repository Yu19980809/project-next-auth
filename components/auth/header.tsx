import { Poppins } from 'next/font/google'

import { cn } from '@/lib/utils'

const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})

export const Header = ({
  label
}: {
  label: string
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 w-full">
      <h1 className={cn(
        'font-semibold text-3xl',
        font.className
      )}>
        🔐 Auth
      </h1>

      <p className="text-sm text-muted-foreground">
        {label}
      </p>
    </div>
  )
}


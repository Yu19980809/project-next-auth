import { CheckCircledIcon } from '@radix-ui/react-icons'

export const FormSuccess = ({
  message
}: {
  message?: string
}) => {
  if (!message) return null

  return (
    <div className="flex items-center gap-x-2 p-3 rounded-md bg-emerald-500/15 test-sm text-emerald-500">
      <CheckCircledIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  )
}


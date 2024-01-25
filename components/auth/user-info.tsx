import { ExtendedUser } from '@/next-auth'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardHeader
} from '@/components/ui/card'

interface UserInfoProps {
  label: string
  user?: ExtendedUser
}

export const UserInfo = ({
  label,
  user
}: UserInfoProps) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="font-semibold text-center text-2xl">
          {label}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-row justify-between items-center p-3 shadow-sm rounded-lg border">
          <p className="font-medium text-sm">ID</p>

          <p className="max-w-[180px] p-1 rounded-md bg-slate-100 font-mono text-xs truncate">
            {user?.id}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center p-3 shadow-sm rounded-lg border">
          <p className="font-medium text-sm">Name</p>

          <p className="max-w-[180px] p-1 rounded-md bg-slate-100 font-mono text-xs truncate">
            {user?.name}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center p-3 shadow-sm rounded-lg border">
          <p className="font-medium text-sm">Email</p>

          <p className="max-w-[180px] p-1 rounded-md bg-slate-100 font-mono text-xs truncate">
            {user?.email}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center p-3 shadow-sm rounded-lg border">
          <p className="font-medium text-sm">Role</p>

          <p className="max-w-[180px] p-1 rounded-md bg-slate-100 font-mono text-xs truncate">
            {user?.role}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center p-3 shadow-sm rounded-lg border">
          <p className="font-medium text-sm">
            Two Factor Authentication
          </p>

          <Badge variant={user?.isTwoFactorEnabled ? 'success' : 'destructive'}>
            {user?.isTwoFactorEnabled ? 'ON' : 'OFF'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

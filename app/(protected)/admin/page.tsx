'use client'

import { UserRole } from '@prisma/client'
import { toast } from 'sonner'

import { admin } from '@/actions/admin'
import { useCurrentRole } from '@/hooks/use-current-role'
import { RoleGate } from '@/components/auth/role-gate'
import { FormSuccess } from '@/components/form-success'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader
} from '@/components/ui/card'

const AdminPage = () => {
  const role = useCurrentRole()

  const handleApiRouteClick = () => {
    fetch('/api/admin')
      .then(res => {
        if (res.ok) {
          toast.success('Allowed API Route!')
        } else {
          toast.error('Forbidden API Route!')
        }
      })
  }

  const handleServerActionClick = () => {
    admin()
      .then(res => {
        if (res.error) toast.error(res.error)
        if (res.success) toast.success(res.success)
      })
    .catch(() => toast.error('Something went wrong!'))
  }
  
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="font-semibold text-center text-2xl">
          🔑 Admin
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to see this content!" />
        </RoleGate>

        <div className="flex flex-row justify-between items-center p-3 rounded-lg border shadow-md">
          <p className="font-semibold text-sm">
            Admin-only API Route
          </p>

          <Button onClick={handleApiRouteClick}>
            Click to test
          </Button>
        </div>

        <div className="flex flex-row justify-between items-center p-3 rounded-lg border shadow-md">
          <p className="font-semibold text-sm">
            Admin-only Server Action
          </p>

          <Button onClick={handleServerActionClick}>
            Click to test
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default AdminPage

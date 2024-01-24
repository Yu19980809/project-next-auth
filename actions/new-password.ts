'use server'

import { z } from 'zod'
import bcrypt from 'bcryptjs'

import { db } from '@/lib/db'
import { NewPasswordSchema } from '@/schemas'
import { getPasswordResetTokenByToken } from '@/lib/password-reset-token-service'
import { getUserByEmail } from '@/lib/user-service'

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) => {
  if (!token) {
    return { error: 'Missing token!' }
  }

  const validatedFields = NewPasswordSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { password } = validatedFields.data
  const existingToken = await getPasswordResetTokenByToken(token)

  if (!existingToken) {
    return { error: 'Invalid token!' }
  }

  const isExpired = new Date(existingToken.expires) < new Date()

  if (isExpired) {
    return { error: 'Token has expired' }
  }

  const existingUser = await getUserByEmail(existingToken.email)

  if (!existingUser) {
    return { error: 'Email does not exist!' }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await db.user.update({
    where: {
      id: existingUser.id
    },
    data: {
      password: hashedPassword
    }
  })

  await db.passwordResetToken.delete({
    where: {
      id: existingToken.id
    }
  })

  return { success: 'Password updated!' }
}

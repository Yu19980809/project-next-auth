'use server'

import { z } from 'zod'
import bcrypt from 'bcryptjs'

import { db } from '@/lib/db'
import { RegisterSchema } from '@/schemas'
import { getUserByEmail } from '@/lib/user-service'

export const register = async (
  values: z.infer<typeof RegisterSchema>,
  callbackUrl?: string | null
) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return {error: 'Invalid firelds!'}
  }

  const {email, password, name} = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (!!existingUser) {
    return {error: 'Email already in use!'}
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  // TODO: Send verification token email

  return {success: 'User created!'}
}

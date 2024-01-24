'use client'

import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { BeatLoader } from 'react-spinners'

import { CardWrapper } from '@/components/auth/card-wrapper'
import { newVerification } from '@/actions/new-verification'
import { FormSuccess } from '@/components/form-success'
import { FormError } from '@/components/form-error'

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()
  const searchParams = useSearchParams()

  const token = searchParams.get('token')

  const onSubmit = useCallback(() => {
    if (success || error) return

    if (!token) return setError('Missing token!')

    newVerification(token)
      .then(res => {
        setSuccess(res.success)
        setError(res.error)
      })
      .catch(() => setError('Something went wrong!'))
  }, [token, success, error])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login page"
      backButtonHref="/auth/login"
    >
      <div className="flex justify-center items-center w-full">
        {!success && !error && <BeatLoader />}
        
        <FormSuccess message={success} />

        {!success && (
          <FormError message={error} />
        )}
      </div>
    </CardWrapper>
  )
}


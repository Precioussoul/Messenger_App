"use client"
import React, {useCallback, useState} from "react"
import {FieldValues, SubmitHandler, useForm} from "react-hook-form"
import Input from "./inputs/Input"
import Button from "./Button"
import AuthSocialButton from "./AuthSocialButton"

type variantProps = "LOGIN" | "REGISTER"

const AuthForm = () => {
  const [variant, setVariant] = useState<variantProps>("LOGIN")
  const [isLoading, setIsLoading] = useState(false)

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER")
    } else {
      setVariant("LOGIN")
    }
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    if (variant === "REGISTER") {
      // axios register
    }

    if (variant === "LOGIN") {
      // next auth
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true)

    // next auth social sign in
  }

  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='bg-white px-4 py-8 shadow rounded-lg sm:py-10'>
        <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input id='name' label='Name' register={register} errors={errors} />
          )}
          <Input
            id='email'
            label='Email Address'
            register={register}
            errors={errors}
          />
          <Input
            id='password'
            label='Password'
            register={register}
            errors={errors}
          />
          <div className=''>
            <Button disabled={isLoading} fullWidth type='submit'>
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>
        <div className='mt-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300' />
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='bg-white px-2 text-gray-500'>
                Or continue with
              </span>
            </div>
          </div>

          <div className='mt-6 flex gap-2'>
            <AuthSocialButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm

"use client"
import React, {useCallback, useState} from "react"
import {FieldValues, SubmitHandler, useForm} from "react-hook-form"
import Input from "./inputs/Input"

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
          <Input />
        </form>
      </div>
    </div>
  )
}

export default AuthForm

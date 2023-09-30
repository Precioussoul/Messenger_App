"use client"
import React, {useCallback, useState} from "react"
import {FieldValues, SubmitHandler, useForm} from "react-hook-form"

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
  }

  return <div>AuthForm</div>
}

export default AuthForm

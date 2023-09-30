"use client"
import clsx from "clsx"
import React from "react"

type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined
  fullWidth?: boolean
  children?: React.ReactNode
  onClick?: () => void
  secondary?: boolean
  danger?: boolean
  disabled?: boolean
}

const Button = ({
  type,
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        `flex justify-center items-center rounded-md px-3 
        py-2 text-sm font-semibold focus-visible:outline
         focus-visible:outline-2 focus-visible:outline-offset-2`,
        disabled && ` opacity-50 cursor-default`,
        fullWidth && "w-full",
        secondary ? "text-gray-500" : "text-white",
        danger && "bg-rose-500 hover:bg-rose-500",
        !secondary &&
          !danger &&
          "bg-sky-500 hover:bg-sky-500 focus-visible:outline-sky-600"
      )}
    >
      {children}
    </button>
  )
}

export default Button

import clsx from "clsx"
import Link from "next/link"
import React from "react"
import {IconType} from "react-icons"

interface MobileItemsProps {
  label?: string
  href: string
  icon: IconType
  active?: boolean
  onClick?: () => void
}

const MobileItem = ({href, icon, active, onClick}: MobileItemsProps) => {
  const handleClick = () => {
    if (onClick) {
      return onClick()
    }
  }
  return (
    <Link
      onClick={handleClick}
      href={href}
      className={clsx(`
    group flex gap-x-3 text-sm font-semibold w-full justify-center p-4 text-gray-500
  `)}
    ></Link>
  )
}

export default MobileItem

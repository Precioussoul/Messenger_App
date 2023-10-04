"use client"
import useRoutes from "@/hooks/useRoutes"
import React, {useState} from "react"
import DesktopItem from "./DesktopItem"
import {User} from "@prisma/client"

interface DesktopSidebarProps {
  currentUser: User
}

const DesktopSidebar = ({currentUser}: DesktopSidebarProps) => {
  const routes = useRoutes()
  const [isOpen, setisOpen] = useState()

  console.log({currentUser})

  return (
    <div className='hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-5 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between'>
      <nav className='mt-4 flex flex-col'>
        <ul className='flex flex-col items-center space-y-1' role='list'>
          {routes.map((item) => (
            <DesktopItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item?.active}
              onClick={item.onClick}
            />
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default DesktopSidebar

"use client"
import {User} from "@prisma/client"
import React from "react"

interface AvatarProps {
  user: User
}

const Avatar = ({user}: AvatarProps) => {
  return <div>Avatar</div>
}

export default Avatar

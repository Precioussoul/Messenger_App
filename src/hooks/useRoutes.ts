import {useMemo} from "react"
import {usePathname} from "next/navigation"
import {HiChat, HiUsers} from "react-icons/hi"
import {HiArrowLeftOnRectangle, HiUser} from "react-icons/hi2"
import {signOut} from "next-auth/react"

import useConversation from "./useConversation"
import {IconType} from "react-icons"

interface RouteProps {
  label: string
  href: string
  icon: IconType
  active?: boolean
  onClick?: () => void
}

const useRoutes = () => {
  const pathname = usePathname()
  const {conversationId} = useConversation()

  const routes: RouteProps[] = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        icon: HiChat,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: HiUsers,
        active: pathname === "/users",
      },
      {
        label: "Logout",
        href: "#",
        icon: HiArrowLeftOnRectangle,
        onClick: () => signOut(),
      },
    ],
    [pathname, conversationId]
  )
  return routes
}

export default useRoutes

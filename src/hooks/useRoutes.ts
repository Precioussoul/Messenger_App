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
  icons: IconType
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
        icons: HiChat,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icons: HiUsers,
        active: pathname === "/users",
      },
      {
        label: "Logout",
        href: "#",
        icons: HiArrowLeftOnRectangle,
        onClick: () => signOut(),
      },
    ],
    [pathname, conversationId]
  )
  return routes
}

export default useRoutes

import prisma from "@/libs/prismaDb"
import getSession from "./getSession"

const getUsers = async () => {
  const session = await getSession()
  console.log("session", session)

  if (!session?.user?.email) {
    return []
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          email: session?.user?.email,
        },
      },
    })

    console.log("successfully retrieved", users)

    return users
  } catch (error) {
    return []
  }
}

export default getUsers

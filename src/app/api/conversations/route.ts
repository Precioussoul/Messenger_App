import getCurrentUser from "@/actions/getCurrentUser"
import {NextResponse} from "next/server"
import prisma from "@/libs/prismaDb"

export default async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser()
    const body = await request.json()
    const {userId, isGroup, members, name} = body

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("Unauthorized", {status: 401})
    }

    if (isGroup && (members.length < 2 || !name)) {
      return new NextResponse("Invalid data", {status: 400})
    }

    if (isGroup) {
      const newConversation = await prisma.conversation.create({
        data: {
          name,
          isGroup,
          users: {
            connect: [
              ...members.map((member: {value: string}) => ({
                id: member.value,
              })),
              {
                id: currentUser.id,
              },
            ],
          },
        },
        include: {
          users: true,
        },
      })

      return NextResponse.json(newConversation)
    }
  } catch (error) {
    return new NextResponse("Internal Server Error", {status: 500})
  }
}
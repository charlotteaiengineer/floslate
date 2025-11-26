import { BentoCard } from "@aliveui/ui/bento-card"
import { Avatar, AvatarFallback, AvatarImage, Button, Text } from "@aliveui/ui"
import { ChevronRight } from "lucide-react"

interface UserProfileCardProps {
  user: {
    name: string
    email: string
    avatar: string
  }
}

export function UserProfileCard({ user }: UserProfileCardProps) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <BentoCard className="col-span-1">
      <div className="flex flex-col items-start gap-4 py-4">
        <div className=" grayscale shadow-inset shadow-[inset_0px_4px_18px_10px_var(--muted)]   border-0 rounded-[3px] p-1">
          <Avatar className="h-40 w-40">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </div>
        <div className="text-center flex flex-col text-left">
          <Text size="4xl" variant="ultralight">{user.name}</Text>
          <Text size="sm" variant="light" className="text-muted-foreground">{user.email}</Text>
          <Text size="xs" variant="light" className="text-muted-foreground mt-1">Artist</Text>
        </div>
      </div>
    </BentoCard>
  )
}

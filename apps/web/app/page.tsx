import { UserProfileCard } from "@/components/preview-cards/user-profile-card"
import { AppsGridCard } from "@/components/preview-cards/apps-grid-card"
import { TodoPreviewCard } from "@/components/preview-cards/todo-preview-card"
import { CalendarPreviewCard } from "@/components/preview-cards/calendar-preview-card"

const user = {
  name: "Michelle Lamy",
  email: "michellelamy@example.com",
  avatar: "/ml.jpg",
}

export default function Home() {
  return (
    <div className="w-full flex-1 flex items-center justify-center min-h-full ">
      <div className="grid grid-cols-1 max-w-6xl  py-32  w-full md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max z-10">
        {/* User Profile Card */}
        <UserProfileCard user={user} />

        <AppsGridCard />

        <TodoPreviewCard />

        <CalendarPreviewCard />

      </div>
    </div>



  );
}

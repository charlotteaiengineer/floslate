import { UserProfileCard } from "@/components/preview-cards/user-profile-card"
import { AppsGridCard } from "@/components/preview-cards/apps-grid-card"
import { TodoPreviewCard } from "@/components/preview-cards/todo-preview-card"

const user = {
  name: "Charlotte Bondarev",
  email: "charlotte@example.com",
  avatar: "/avatars/shadcn.jpg",
}

export default function Home() {
  return (
    <div className="h-full w-full p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {/* User Profile Card */}
          <UserProfileCard user={user} />
          
          {/* Apps Grid Card */}
          <AppsGridCard />
          
          {/* Todo Preview Card */}
          <TodoPreviewCard />
        </div>
      </div>
    </div>
  );
}

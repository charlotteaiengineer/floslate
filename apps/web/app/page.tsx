import { UserProfileCard } from "@/components/preview-cards/user-profile-card"
import { AppsGridCard } from "@/components/preview-cards/apps-grid-card"
import { TodoPreviewCard } from "@/components/preview-cards/todo-preview-card"
import { EtheralShadow } from "@aliveui/ui";

const user = {
  name: "Charlotte Bondarev",
  email: "charlotte@example.com",
  avatar: "/avatars/shadcn.jpg",
}

export default function Home() {
  return (


       
                    <div className="mx-auto flex-1 flex items-center min-h-full max-w-6xl">
            <div className="grid grid-cols-1 max-w-9xl  py-32 mx-auto  md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max z-10">
              {/* User Profile Card */}
              <UserProfileCard user={user} />
              
              {/* Apps Grid Card */}
              <AppsGridCard />
              
              {/* Todo Preview Card */}
              <TodoPreviewCard />
                <UserProfileCard user={user} />
              
              {/* Apps Grid Card */}
              <AppsGridCard />
                     <UserProfileCard user={user} />
              {/* Todo Preview Card */}
              <TodoPreviewCard />
              <TodoPreviewCard />
            </div>
        </div>
          
   
    
  );
}

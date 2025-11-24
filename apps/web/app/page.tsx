import { UserProfileCard } from "@/components/preview-cards/user-profile-card"
import { AppsGridCard } from "@/components/preview-cards/apps-grid-card"
import { TodoPreviewCard } from "@/components/preview-cards/todo-preview-card"
import { CalendarPreviewCard } from "@/components/preview-cards/calendar-preview-card"

const user = {
  name: "Stefani Germanotta",
  email: "stefani@floslate.com",
  avatar: "https://scontent.fbhx7-1.fna.fbcdn.net/v/t39.30808-6/517592732_1318390362989436_510906406583488429_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=h1xE7SNgviYQ7kNvwEWN3aB&_nc_oc=Adni9y7bYV0SDvFt5khQ-kjmlOwXdL4ZYNsEklx9Hg5t2rsx1KiTq7AlYIuAL93ZKx7-FRG3YqXACnDaMqsrk82g&_nc_zt=23&_nc_ht=scontent.fbhx7-1.fna&_nc_gid=RsRKp-yNC2b8upLKo9XXBg&oh=00_AfjCWbHknZaCLzimlB56tW9rnRDIpJtkDNqb_kBqEQERfA&oe=692AA285",
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

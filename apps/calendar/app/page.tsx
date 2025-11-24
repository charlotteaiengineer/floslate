import { Suspense } from "react";
import CalendarView from "@/components/calendar-view";

export default function Page() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
        <h1 className="text-lg font-semibold">Calendar</h1>
      </header>
      <main className="flex-1 overflow-hidden">
        <Suspense fallback={<div>Loading calendar...</div>}>
          <CalendarView />
        </Suspense>
      </main>
    </div>
  );
}

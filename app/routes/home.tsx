import { useState } from "react";
import type { Route } from "./+types/home";
import PomodoroTimer from "~/components/PomodoroTimer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [time, setTime] = useState<number>()

  return (
    <>
      <div>
      <input
        placeholder="Minutes"
        type="number"
        value={time ?? ""}
        onChange={(e) => setTime(Number(e.target.value))}
      />
      </div>
      <PomodoroTimer key={time} duration={time! * 60} />
    </>
  )
}

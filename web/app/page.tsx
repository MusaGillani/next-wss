import { nanoid } from "nanoid";

import NavBar from "@/components/navbar";
import JoinRoomForm from "@/components/joinRoomForm";
import { Label } from "@/components/ui/label";
import { gloriaHallelujah } from "@/fonts";

export default function RootPage() {
  const id = nanoid();

  return (
    <main className="h-screen w-screen p-5">
      <NavBar className="w-4/5 mx-auto" />
      <div className="h-20" />
      <div className="m-auto w-4/5 flex flex-col justify-between sm:w-[550px] sm:h-[600px] border-2 rounded-2xl p-10">
        <div className="flex flex-col gap-y-3">
          <Label className={`text-4xl ${gloriaHallelujah.className}`}>
            DOODLE
          </Label>
          <Label className="text-xl text-neutral-500 dark:text-neutral-400">
            Create doodles with your friends in real time
          </Label>
        </div>
        <JoinRoomForm id={id} />
      </div>
    </main>
  );
}

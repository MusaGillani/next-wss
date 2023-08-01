import ColorPicker from "@/components/colorPicker";
import { Button } from "@/components/ui/button";

export default function CanvasPage() {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between w-full h-[calc(100vh-10rem)]">
        <canvas className="rounded-xl dark:border-neutral-500 border bg-white w-full h-[calc(100vh-10rem)]" />
        <div className="w-5" />
        <aside className="mx-2 rounded-xl border border-neutral-500 p-5 h-[calc(100vh-10rem)] w-[25rem] flex flex-col justify-between">
          <div>
            <ColorPicker />
            <p>Stroke width</p>
          </div>
          <div>
            <Button
              type="button"
              variant={"destructive"}
              className="w-full h-12 text-lg"
            >
              Leave Room
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}

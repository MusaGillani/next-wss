import Sidebar from "@/components/sidebar";

export default function CanvasPage() {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between w-full h-[calc(100vh-10rem)]">
        <canvas className="rounded-xl dark:border-neutral-500 border bg-white w-full h-[calc(100vh-10rem)]" />
        <div className="w-5" />
        <Sidebar />
      </div>
    </div>
  );
}

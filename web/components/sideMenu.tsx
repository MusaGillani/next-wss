import { Button } from "@/components/ui/button";
import ColorPicker from "./colorPicker";
import DoodleWidth from "./doodleWidth";
import { cn } from "@/lib/utils";

const SideMenu: React.FC<{ hidden?: boolean }> = ({ hidden }) => {
  return (
    <aside
      className={cn(
        { hidden: hidden },
        { "flex flex-col": !hidden },
        { "w-[25rem]": hidden },
        { "w-[13.5rem]": !hidden },
        { "h-[calc(100vh-10rem)]": hidden },
        { "h-[calc(100vh-5rem)]": !hidden },
        "mx-2 rounded-xl border border-neutral-500 p-5 lg:flex flex-col justify-between"
      )}
    >
      <div>
        <ColorPicker />
        <DoodleWidth />
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
  );
};

export default SideMenu;

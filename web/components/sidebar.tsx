"use client";
import { Button } from "@/components/ui/button";
import SideMenu from "./sideMenu";
import { PanelRightOpen } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Sidebar: React.FC = () => {
  return (
    <>
      <SideMenu hidden={true} />
      <Sheet>
        <SheetTrigger asChild>
          <button className="lg:hidden absolute top-9 right-5 inline-flex items-center justify-center rounded-lg bg-purple-200 dark:bg-teal-900 p-5">
            <PanelRightOpen />
          </button>
        </SheetTrigger>
        <SheetContent className="w-[17rem]">
          <SideMenu />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;

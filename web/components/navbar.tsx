"use client";
import { cn } from "@/lib/utils";
import ThemeSwitch from "@/components/themeSwitch";
import { gloriaHallelujah } from "@/fonts";
import { Label } from "@radix-ui/react-label";

const NavBar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <nav
      className={cn(
        "flex w-full items-center justify-between opacity-75",
        className
      )}
    >
      <Label className={`text-4xl ${gloriaHallelujah.className}`}>DOODLE</Label>
      <div className="flex items-center gap-x-3">
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default NavBar;

"use client";

import { HexAlphaColorPicker } from "react-colorful";
import { Popover } from "./ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Label } from "@radix-ui/react-label";
import { gloriaHallelujah } from "@/fonts";
import { useState } from "react";

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>("#b14949");
  return (
    <div>
      <Label
        htmlFor="doodleColor"
        className={`select-none text-2xl ${gloriaHallelujah.className}`}
      >
        Doodle Color
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <div
            className="h-10 my-4 w-full rounded-md p-0 ring-2 ring-border ring-offset-2"
            style={{
              backgroundColor: color,
            }}
          />
        </PopoverTrigger>
        <PopoverContent className="bg-neutral-800 p-5 rounded-xl h-60 w-60 mt-3">
          <HexAlphaColorPicker
            id="doodleColor"
            color={color}
            onChange={setColor}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ColorPicker;

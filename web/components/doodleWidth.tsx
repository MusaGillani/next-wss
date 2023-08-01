"use client";

import { Label } from "@radix-ui/react-label";
import { gloriaHallelujah } from "@/fonts";
import { useState } from "react";
import { Slider } from "./ui/slider";

const DoodleWidth: React.FC = () => {
  const [width, setWidth] = useState([2]);
  return (
    <div>
      <div className="flex select-none items-center justify-between">
        <Label
          htmlFor="widthSlider"
          className={`select-none text-2xl ${gloriaHallelujah.className}`}
        >
          Doodle Width
        </Label>
        <span className="py-1 px-2 text-neutral-500 dark:text-neutral-400 text-xl">
          {width}
        </span>
      </div>

      <Slider
        id="widthSlider"
        min={0}
        max={20}
        step={1}
        value={width}
        onValueChange={setWidth}
        className="[&_[role=slider]]:h-6 [&_[role=slider]]:w-6 my-4"
      />
    </div>
  );
};

export default DoodleWidth;

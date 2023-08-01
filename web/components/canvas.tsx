"use client";
import { Excalidraw as ExcalidrawComp } from "@excalidraw/excalidraw";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Canvas: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [Excalidraw, setExcalidraw] = useState<typeof ExcalidrawComp>();
  useEffect(() => {
    import("@excalidraw/excalidraw").then((comp) =>
      setExcalidraw(comp.Excalidraw)
    );
  }, []);
  return <>{Excalidraw && <Excalidraw theme={resolvedTheme} />}</>;
};

export default Canvas;

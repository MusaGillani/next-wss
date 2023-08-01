"use client";
import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "usehooks-ts";
import { useState } from "react";

import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  id: string;
};

const CopyButton: React.FC<Props> = ({ id }) => {
  const { toast } = useToast();
  const [_, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    copy(id);
    setIsCopied(true);
    toast({
      title: id,
      description: "Room Id Copied!",
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant={"default"}
            className="rounded-md hover:bg-neutral-200 h-14 w-14"
            onClick={handleCopy}
          >
            <span className="sr-only">Copy</span>
            {isCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy Id to share with friends!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CopyButton;

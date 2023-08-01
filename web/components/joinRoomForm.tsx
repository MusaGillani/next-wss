"use client";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useForm from "@/hooks/useForm";
import { SubmitHandler } from "react-hook-form";
import { Icons } from "./icons";
import CopyButton from "./copyButton";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string(),
  roomId: z.string().min(21).optional(),
});

const JoinRoomForm: React.FC<{ id: string }> = ({ id }) => {
  const router = useRouter();
  const form = useForm(formSchema, {});
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    console.log(data);
    router.push(`/${id}`);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormDescription className="text-lg">
                Your name to display in doodle room.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="roomId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Room ID</FormLabel>
              <FormControl>
                <div className="flex gap-2">
                  <Input placeholder={id} {...field} />
                  <CopyButton id={id} />
                </div>
              </FormControl>
              <FormDescription className="text-lg">
                Enter room Id to join room or leave empty to create new room
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full h-14"
          disabled={form.formState.isLoading}
        >
          {form.formState.isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <p className="text-lg">Join room</p>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default JoinRoomForm;

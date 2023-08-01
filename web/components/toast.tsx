"use client";
import { memo, useEffect, useMemo, useState } from "react";
import { A } from "@mobily/ts-belt";
import mitt from "mitt";
import { v4 as uuid } from "@lukeed/uuid";

type Toast = {
  title: string;
  body?: string;
};

type ToastEvent = Toast & {
  id: string;
};

type ToastEvents = {
  push: ToastEvent;
};

const emitter = mitt<ToastEvents>();

export const pushToast = (toast: Toast) => {
  emitter.emit("push", { ...toast, id: uuid() });
};

export const Toast = memo(() => {
  // toasts are stored in events array
  const [events, setEvents] = useState([] as ToastEvent[]);
  useEffect(() => {
    const handler = (e: ToastEvent) => {
      // add new toast to array of toasts
      setEvents((prev) => [...prev, e]);
      // add timer for 5 secs to remove toast
      setTimeout(() => {
        setEvents((prev) => {
          // find index of current toast in state and remove it
          const index = prev.findIndex((i) => i.id === e.id);
          if (index >= 0) {
            return [...A.removeAt(prev, index)];
          }
          return prev;
        });
      }, 5000);
    };
    // attach handler for each push event
    emitter.on("push", handler);
    () => emitter.off("push", handler);
  }, []);

  return (
    <div>
      {events.map((event, i) => (
        <div key={i}>
          <p>{event.title}</p>
          {event.body ? <p>{event.body}</p> : null}
        </div>
      ))}
    </div>
  );
});

Toast.displayName = "Toast";

// usage
export default function Home() {
  return (
    <div>
      <p>Hello world</p>
      <Toast />
      <button
        onClick={() => {
          pushToast({ title: "test" });
        }}
      >
        Click
      </button>
    </div>
  );
}

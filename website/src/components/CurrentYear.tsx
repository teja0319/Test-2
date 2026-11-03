"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Shows the current year; read only in the browser so the page can stay fully static. */
export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return <span>{year ?? ""}</span>;
}

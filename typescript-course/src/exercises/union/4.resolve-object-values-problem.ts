import { Equal, Expect } from "@/type-utils";

export const notification = {
  ALERT: "alert",
  WARNING: "warning",
  DANGER: "danger",
};
type NotifcationAlert = unknown;
type tests = [Expect<Equal<NotifcationAlert, "alert">>];

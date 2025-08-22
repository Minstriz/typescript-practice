import { Equal, Expect } from "@/type-utils";

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}
type Example = MyComplexInterface<
  "click",
  "window",
  "my-event",
  true
>;
type GetPoint2<T extends {}> = T extends MyComplexInterface<any,any,any,infer U> ? U extends {x: infer X, y: infer Y} ? {x:X, y:Y} :never:never;
type GetPoint<T extends {}> = T extends MyComplexInterface<any,any,any,infer U> ? U :never;
type Result = GetPoint<Example>

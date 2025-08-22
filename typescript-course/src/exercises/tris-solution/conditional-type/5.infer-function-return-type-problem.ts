import { Equal, Expect } from "@/type-utils";

type ReturnTypeOfFunction<T extends (...args:any)=> unknown> = T extends (...args:any) =>infer ReturnValue ?  ReturnValue : never;
type ReturnTypeOfFunction2<T extends (...args:any)=> unknown> = ReturnType<T>

// Test cases
type Case1 = Expect<Equal<ReturnTypeOfFunction2<() => number>, number>>; // number
type Case2 = Expect<
  Equal<ReturnTypeOfFunction<(x: string) => boolean>, boolean>
>; // boolean

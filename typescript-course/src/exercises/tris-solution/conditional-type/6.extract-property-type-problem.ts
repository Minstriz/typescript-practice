import { Equal, Expect } from "@/type-utils";

type PropertyType<T extends ExampleType, K extends keyof T> = T[K];

// Test cases
type ExampleType = { name: string; age: number; isStudent: boolean };
type NameType = Expect<Equal<PropertyType<ExampleType, "name">, string>>; // string
type AgeType = Expect<Equal<PropertyType<ExampleType, "age">, number>>; // number
type FalseCast = Expect<Equal<PropertyType<ExampleType,"isStudent">,boolean>>;
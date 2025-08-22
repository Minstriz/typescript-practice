{
    //[X, ...A]  // thêm X vào trước tuple A
    //[...A, X]  // thêm X vào sau tuple A
  type AppendArgument<T extends (...arg:any[])=> number,K> = T extends (...args: infer A) => number ? [K, ...A] : never;
  type SomeF = (a: number, b: string) => number;
  type FinalF = AppendArgument<SomeF, boolean>;
  // FinalF is (x: boolean, a: number, b: string) => number
}

import { clearScreenDown } from "readline";

//ternary operator
const number = 100;
const isTrue = number >= 100 ? true : false;

//ConditionalType = SomeType extends OtherTypes ? TrueType : FalseType
type check<T> = T extends string ? "string" : "non-string";
export type isString = check<string>;
export type isNonString = check<123>;

type Parameters<T extends (...args: any) => any> = T extends (
  ...arg: infer P
) => any
  ? P
  : never;
function logObject(x: string, y: number) {}
type z = Parameters<typeof logObject>;

/* 
    Ở dòng này
    type Parameters<T extends (...args: any) => any> = T extends (....
    Từ sau dấu = đổ đi là Conditional Type

    ...arg: là 1 mảng chứa nhiều parameters mà mình không rõ về số lượng và cấu trúc
    infer P: Nghĩa là gom tất cả trong mảng ...arg đó lại thành 1 type P 
*/

/* EXTRACT & EXCLUDE type */
type Extract<T, U> = T extends U
  ? T
  : never; /* LẤY RA những kiểu T có thể gán được cho kiểu U. Nói cách khác: lọc từ T ra các kiểu con của U.*/
type Exclude<T, U> = T extends U
  ? never
  : T; /* LOẠI TRỪ những kiểu T có thể gán được cho kiểu U. Nói cách khác: bỏ đi các nhánh của T khớp với U. */

type X = Extract<string | string[], string[]>;
type Y = Exclude<string | string[], string[]>;

/* RETURN type
    Trả ra kết quả return của 1 function
*/
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer ReturnValue /* chỗ này khác parameter là nó sẽ phải infer ra thứ sẽ return của 1 function nên nó phải infer ở chỗ này, còn parameter là nó phải infer phía trên để nó lấy parameter, biến ReturnValue là do mình tự đặt, còn mặc định Typescript sẽ để chữ này là R */
  ? ReturnValue
  : any;

function sum(a: number, b: number): number {
  return a + b;
}
// (...args: any) => number
// (...args: any) => string
// (...args: any) => boolean
// (...args: any) => ReturnValue -> ReturnValue : any
function logMyName(): string {
  return "evondev";
}
type SumF = ReturnType<typeof sum>; //number
type LogMyNameF = ReturnType<typeof logMyName>; //string

console.log();


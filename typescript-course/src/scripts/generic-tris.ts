/* Generic là tạo ra 1 hàm/components có thể tái sử dụng (reuse), không cần cố định 1 type cụ thể mà hàm đó có thể linh hoạt thay đổi kiểu dữ liệu để phù hợp với nhiều trường hợp mà không cần viết lại hàm đó và thay đổi kiểu dữ liệu (không cần làm nhiều version khác nhau của 1 hàm/component nếu chỉ khác type)

> Cho phép khác type được định nghĩa sau khi biết value! Đây là sức mạnh của generic
 */

import { log } from "console";
import { it } from "vitest";

/* 
    Cấu trúc <T> <TData>
*/

function identity<A>(arg:A) : A {
    return arg;
}

identity<number>(10); /* function identity<number>(arg: number): number */
identity<string>("100"); /* function identity<string>(arg: string): string */
identity<Boolean>(false);/* function identity<Boolean>(arg: Boolean): Boolean */

function pair<A,B>(a: A,b: B): [A,B] {
    return[a,b];
}
pair(10,10); /* function pair<number, number>(a: number, b: number): [number, number] */
pair(false,10); /* function pair<boolean, number>(a: boolean, b: number): [boolean, number] */
pair("100",10); /* function pair<string, number>(a: string, b: number): [string, number] */

/* TỪ KHOÁ EXTEND dùng để ràng buộc cho kiểu dữ liệu của biến đó bắt buộc generic phải tuân theo những kiểu dữ liệu cho phép.
type GenericType <T extends ConstraintType> = ...
*/

function logLength<T  extends { length:number }>(item: T): void { 
    console.log(item.length); /* báo lỗi ở length vì nếu kiểu T là number, boolean... sẽ không có phương thức length, mục đích của length:number là báo hiệu rằng trong kiểu T này, không kiểu NUMBER SẼ KHÔNG CÓ . LENGTH, liệt kê ra để ngoại trừ kiểu đó ra và báo lỗi khi user truyền vào */
}
logLength("123");
/* logLength(123); */ /* Lỗi vì số không có . length */
logLength([1,2,3]); 

const students = {
    name: "tri",
    age:20,
    school: "abc",
    year:1111
};
type keyOfStudents = keyof typeof students;
function logObject<O extends {}/* O sẽ là object */, K extends keyof O /* Phải xác định là các key này là của object O, nếu không xác định thì nó không biết key truyền vào ở đâu ra và có hợp lệ hay không thế nên nó sẽ báo lỗi. */ >(obj:O, key:K): void {
    console.log(obj[key])
}
logObject(students,"school") /* với cách làm trên, từ giờ object students thêm biến gì vào đi nữa thì nó sẽ tự động cập nhật và gợi ý khi nhập */
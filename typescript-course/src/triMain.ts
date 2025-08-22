const languages: string = "Typescript"
const number:number = 10
let isOpen:Boolean = true 
isOpen = false 

//như dưới là sai, vì type number | boolean không được gán cho type string, mục tiêu: nếu language là javascript thì gán số 100 cho biến texts, nhưng texts là kiểu string nên báo lỗi.
const texts: string = languages === "javascript" ? "100" : "true"; //không gán 
console.log(texts.split(""))
//kiểu undefined
let keyboards: undefined;
/* keyboards = "akko"; */ //undefined không thể gán giá trị 

let keyboard2:any; 
keyboard2 = "steam"; //any gán được cho tất cả giá trị nhưng rủi ro, hạn chế sử dụng type any nhất có thể
/* 
let mouses: null = null;
mouses =  "Hello world"; */ //null không thể gán giá trị

let abc: unknown;
abc = "Biến abc này sẽ không tự động thành chuỗi string, nó vẫn sẽ là unknown"

//Trong js người ta khai báo như sau thì vẫn sẽ hợp lệ
/* function sumWrong(a,b) {
    return a+b;
} */
//không phải lúc nào người dùng cũng truyền số nên không đảm bảo được type nên cách đúng là khai báo như sau
function sumRight(a: number, b: number) {
    return a + b;
}
/* sumWrong("5","10") */

if(typeof abc === "string") {
    console.log(abc.split(""))
}

function sum(a:unknown, b:unknown): number {
    if(typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return 0;
}
sum("5","10"); //0
sum(5,10); //15S

function calculate() {
    while (true) {
        console.log("infinite");
    }
    
}
//typeof
console.log(typeof 5);
function checktypeOf(value: any) {
  if (typeof value === "string") {
    console.log("value is string");
  } else if (typeof value === "number") {
    console.log("value is number");
  }
}

checktypeOf("hello");

//Khai báo type và type guard: in
type As = {
  x: number;
};
type Bs = {
  y: string;
};
type Cs = As | Bs; 
function checkinfos(info: Cs) {
    if("x" in info) {
        console.log(info.x)
    } else if ("y" in info) {
        console.log(info.y)
    }
    
}

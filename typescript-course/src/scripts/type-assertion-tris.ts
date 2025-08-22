//const numbericId: string = "123"; //type beat value
//as const
const scoreses = [1,2,3,4,5] as const; //khi as const thì không thể thêm data vào đc nữa nên push dưới sẽ báo lỗi.
/* scoreses.push(6); */

//statifies

//as Type
type Userr = {
    id: number;
    name: {
        first:string;
        last:string;
    };
};
const newUser = {} as Userr;
/* newUser.name.first = "evondev"; */


const routess: Record<string,any> = {
    "/":"Home Page",
    "/about":"About Page",
    "/contact":"Contact Page"
};

/* console.log(routes["alo"]) //trả ra undefined chứ không báo LỖI vì nó thoả Record là truyền vào string và bên kia là any vì type beats value */

const routes = {
    "/":"Home Page",
    "/about":"About Page",
    "/contact":"Contact Page"
} satisfies Record<string,any>; //satisfied thì value sẽ đánh bại type, value beats type

/* console.log(routes["/ALO"])  */// báo lỗi vì value không tồn tại trong object
console.log(routes["/contact"])
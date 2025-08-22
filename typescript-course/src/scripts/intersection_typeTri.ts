{
  //Nếu muốn trong extra bắt buộc phải đầy đủ cả name và school thì dùng intersection (thay dấu | (hoặc) thành dấu 7 (và))
  const information: (string|number|boolean)[] = ["badminton", "soccer", "basketball", "tennis",100,false];
  const studentses: {
    name: string;
    age: number;
    score?: number | string;
    extra?: {
        name:string;
    } & {
        school: string;
    }
  }[] = [
    {
      name: "John",
      age: 18,
      score: 25,
      extra: {
        name: "Cao Thang",
        school: "Hutech University",
      }
    },
    {
      name: "Jinx",
      age: 23,
      score: "100", 
      extra: {
        name:"Drama",
        school: "Drama School" //bắt buộc phải có trường school vì dấu &
      }
    },
  ];
}
//Khi làm việc với object thì không nên sử dụng dấu {} mà phải làm như bên dưới (trong trường hợp bạn không biết dữ liệu truyền vào là key gì, kiểu dữ liệu gì cả, nếu biết rồi thì có thể khai báo như bên trên), bởi vì vốn dĩ dấu {} chấp nhận hầu hết kiểu dữ liệu trừ null và undefined nên rất nguy hiểm và rủi ro
//1. Khai báo object đó rõ ràng luôn là object đó sẽ có những trường gì
//2. Sử dụng Record để khai báo kiểu dữ liệu cho object
const studentesss: Record<string,any> = {
    name:"Do tri"
}

//
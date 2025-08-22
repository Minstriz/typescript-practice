{
  //Nếu trường hợp có 1 mảng chứa nhiều kiểu dữ liệu thì dùng union
  const information: (string|number|boolean)[] = ["badminton", "soccer", "basketball", "tennis",100,false];
  const scores: number[] = [1, 2, 3, 4, 5];
  const filter: boolean[] = [true, false];
  const studentses: {
    name: string;
    age: number;
    score?: number | string;
    extra?: {
        name:string;
    } | {
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
      score: "100", //chỗ này user trả về là chuỗi 100 chứ không phải số 100 nên sẽ bị lỗi, phải dùng union number | string trên score
      extra: {
        name:"Drama"
      }
    },
  ];
}

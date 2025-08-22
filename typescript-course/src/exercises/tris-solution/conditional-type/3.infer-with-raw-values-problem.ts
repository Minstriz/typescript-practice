// Minimal implementations for Equal and Expect for testing purposes
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;
//GetDataValue <{ data: { name: "hello"; age: 20 } } ->{ name: "hello"; age: 20 }
// GetDataValue { data: "hello" } -> "hello"
//GetDataValue { data: { name: "hello" } }>, { name: "hello" }

type GetDataValue<T extends {}> = T extends { data: infer U } ? U : never;
type tests = [
  Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      GetDataValue<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >
];

type result = GetDataValue<{ data: "hello" }>;
type result2 = GetDataValue<{ data: { name: "hello" } }>;
type result3 = GetDataValue<{ data: { name: "hello"; age: 20 } }>;

// bài tự thêm 2
type GetDataValue2<T extends {}, K extends PropertyKey> = K extends keyof T
  ? T[K]
  : never;
type GetDataValue2Result1 = GetDataValue2<{ id: 1; name: "Trí" }, "name">; // "Trí"
type GetDataValue2Result2 = GetDataValue2<{ id: 1; name: "Trí" }, "age">; // never

//bài tự thêm 3
type GetNestValue<T extends {}> = T extends { data: { info: infer U } }
  ? U
  : never;
type GetNestValueResult1 = GetNestValue<{ data: { info: { title: "Hi" } } }>; // { title: "Hi" }
type GetNestValueResult2 = GetNestValue<{ data: { info: 123 } }>; // 123

//bài tự thêm 4
type GetDataValues<T extends {}> = T extends { data: infer U } ? U : never;
type baithem4 = GetDataValues<{ data: "hello" } | { data: 123 }>; // "hello" | 123

//bài tự thêm 5: Viết type GetAllDataValues<T> nhận vào một mảng các object có data, trả về union tất cả type của data.
// 1 | "Hi" | true
type GetAllDataValues5<T extends {}> = T extends Array<infer Item>
  ? Item extends { data: infer U }
    ? U
    : never
  : never;
type rs51 = GetAllDataValues5<[{ data: 1 }, { data: "Hi" }, { data: true }]>;

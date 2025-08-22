{
  const info: readonly [count: number, name: string, isActive: boolean] = [
    100,
    "123",
    true,
  ] as const;

  /* info.push(399); */ /* Khi thêm readonly thì chỗ này sẽ báo lỗi*/

  console.log(info);
}

export const sayHello = (name: string) => {
  const res = `Hello ${name}!`;
  console.log(res);
  return res;
};

sayHello("world");

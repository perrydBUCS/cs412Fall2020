class A {
  a: string;
  b: {
    c: number;
    d: number;
  }
};
let xx : A = {
  a: 'hey',
  b: {
    c: 5,
    d: 6
  }
}

console.log(`${xx.b.c}`)

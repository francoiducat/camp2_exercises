const orange_tree = require("./03_orange_tree");

test("pick an orange", () => {
  orange_tree.seed();
  orange_tree.oranges=1;
  const res = orange_tree.pickAnOrange();
  expect(res).toBeTruthy();
  expect(orange_tree.oranges).toEqual(0);
  orange_tree.oranges=0;
  const resu = orange_tree.pickAnOrange();
  expect(resu).toBeFalsy();
});


test("seed orange tree", () => {
  orange_tree.seed();
  expect(orange_tree.alive).toBeTruthy();
  expect(orange_tree.height).toBe(0);
  expect(orange_tree.age).toBe(0);
  expect(orange_tree.oranges).toBe(0);
});


test("age one year AND alive to be true or false", () => {
  orange_tree.seed();
  for (let i = 1; i < 50; i++) {
    orange_tree.ageOneYear();
    expect(orange_tree.alive).toBeTruthy();
  }
  orange_tree.age =99;
  for (let i = 1; i < 50; i++) {
    orange_tree.ageOneYear();
    expect(orange_tree.alive).toBeFalsy();
  }
});

test("age one year AND oranges", () => {
  orange_tree.seed();
  for (let i = 1; i < 4; i++) {
    orange_tree.ageOneYear();
    expect(orange_tree.oranges).toBe(0);
  }
  for (let i = 5; i < 10; i++) {
    orange_tree.ageOneYear();
    orange_tree.oranges = 10*i;
    expect(orange_tree.oranges).toBe(10*i);
  }
  for (let i = 10; i < 20; i++) {
    orange_tree.ageOneYear();
    orange_tree.oranges = 20*i;
    expect(orange_tree.oranges).toBe(20*i);
  }
  for (let i = 20; i < 40; i++) {
    orange_tree.ageOneYear();
    orange_tree.oranges = 5*i;
    expect(orange_tree.oranges).toBe(5*i);
  }
  for (let i = 40; i < 100; i++) {
    orange_tree.ageOneYear();
    orange_tree.oranges = 0;
    expect(orange_tree.oranges).toBe(0);
  }

});

test("age one year AND height", () => {
  orange_tree.seed();
  for (let i = 1; i < 10; i++) {
    orange_tree.ageOneYear();
    expect(orange_tree.height).toBe(25 * i);
  }
  orange_tree.height = 225;
  orange_tree.age = 10;
  for (let i = 1; i < 10; i++) {
    orange_tree.ageOneYear();
    expect(orange_tree.height).toBe(225+10*i);
  }
  orange_tree.height = 325;
  orange_tree.age = 20;
  for (let i = 1; i < 10; i++) {
    orange_tree.ageOneYear();
    expect(orange_tree.height).toBe(325);
  }
});

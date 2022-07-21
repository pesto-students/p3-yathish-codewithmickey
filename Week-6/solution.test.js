const Exercise_6_1 = require("./solution");

describe("Exercise for week 6 BDD", () => {
  test("Exercise 6.1 test 1", () => {
    expect(Exercise_6_1.fnContiguousSubarraySum([1, 2, 3, 4, -10])).toBe(10);
  });
  test("Exercise 6.1 test 2", () => {
    expect(Exercise_6_1.fnContiguousSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
});
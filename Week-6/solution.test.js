const Exercise_6 = require("./solution");

describe("Exercise for week 6 BDD", () => {
  test("Exercise 6.1 test 1", () => {
    expect(Exercise_6.fnContiguousSubarraySum([1, 2, 3, 4, -10])).toBe(10);
  });
  test("Exercise 6.1 test 2", () => {
    expect(Exercise_6.fnContiguousSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
  test("Exercise 6.2 test 1", () => {
    expect(Exercise_6.spiralPrint([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ])).toBe([1, 2, 3, 6, 9, 8, 7, 4, 5].toString());
  });
  test("Exercise 6.2 test 2", () => {
    expect(Exercise_6.spiralPrint([[ 1, 2, 3, 4 ],
        [ 5, 6, 7, 8 ],
        [ 9, 10, 11, 12 ],
        [ 13, 14, 15, 16 ]])).toBe([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10].toString());
  });
  test("Exercise 6.3 test 1", () => {
    expect(Exercise_6.arrange([0, 2, 1, 2, 0])).toBe([0, 0, 1, 2, 2].toString());
  });
  test("Exercise 6.4 test 1", () => {
    expect(Exercise_6.calculateProfit([7,1,5,3,6,4])).toBe(5);
  });
  test("Exercise 6.4 test 2", () => {
    expect(Exercise_6.calculateProfit([7,6,4,3,1])).toBe(0);
  });

  test("Exercise 6.5 test 1", () => {
    expect(Exercise_6.findPair([5, 10, 3, 2, 50, 80],78)).toBe(1);
  });

  test("Exercise 6.5 test 2", () => {
    expect(Exercise_6.findPair([-10, 20] ,30)).toBe(1);
  });
});
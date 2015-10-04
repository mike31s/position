/*globals position */
describe("Position", function () {
  var testnums = [1, 3, 5, 6];

  it("When passed 5 it should return 2", function () {
    expect(position(testnums, 5)).toEqual(2);
  });
  it("When passed 2 it should return 1", function () {
    expect(position(testnums, 2)).toEqual(1);
  });
  it("When passed 7 it should return 4", function () {
    expect(position(testnums, 7)).toEqual(4);
  });
  it("When passed 0 it should return 0", function () {
    expect(position(testnums, 0)).toEqual(0);
  });

});

import "../../src/index";
describe("Promise", () => {
  beforeEach(() => {});

  it("should Promise.when", async () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.reject(3),
    ];
    const result = await Promise.when(promises);
    expect(result).toEqual({
      errors: [3],
      result: [1, 2],
    });
  });
  it("should Promise.allObject", async () => {
    const objPromise = {
      a: () => Promise.resolve(1),
      b: () => Promise.resolve(2),
      c: () => Promise.resolve(3),
    };
    const result = await Promise.allObject(objPromise);
    expect(result).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });
  it("should Promise.retry", async () => {
    const funcPromise = () => Promise.resolve(1);
    const result = await Promise.retry(funcPromise, 3);
    expect(result).toEqual(1);
  });
});

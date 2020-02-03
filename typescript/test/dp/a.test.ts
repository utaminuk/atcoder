import { main } from "../../src/dp/a/index";

describe("dp", () => {
  test("a", () => {
    const json = `
    [["4\\n10 30 40 20","30"],["2\\n10 10","0"],["6\\n30 10 60 10 60 50","40"]]
    `;
    const params = JSON.parse(json);
    const customParams = [];
    runTest(main, params, customParams);
  });
});

function runTest(solver, params, customParams = []) {
  const test = param => {
    const [i, o] = param;
    expect(solver(i)).toBe(o);
  };
  params.forEach((p, index) => {
    it(`Test params[${index}]`, () => test(p));
  });
  customParams.forEach((p, index) => {
    it(`Test customParams[${index}]`, () => test(p));
  });
}

import { main } from "../../src/dp/a/index";

type AtcoderAnswers = string[][];

describe("dp", () => {
  const json = `
    [["4\\n10 30 40 20","30"],["2\\n10 10","0"],["6\\n30 10 60 10 60 50","40"]]
    `;
  const params: AtcoderAnswers = JSON.parse(json);
  const customParams: AtcoderAnswers = [];
  runTest(main, params, customParams);
});

function runTest(
  solver: any,
  params: AtcoderAnswers,
  customParams: AtcoderAnswers = []
) {
  const test = (param: string[]) => {
    const [i, o] = param;
    expect(String(solver(i))).toBe(o);
  };
  params.forEach((p, index: number) => {
    it(`Test params[${index}]`, () => test(p));
  });
  customParams.forEach((p, index) => {
    it(`Test customParams[${index}]`, () => test(p));
  });
}

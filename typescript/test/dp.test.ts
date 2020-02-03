import { runTest, AtcoderAnswers } from "./common";
import { main as mainA } from "../src/dp/a";
import { main as mainB } from "../src/dp/b";


describe("dp - A", () => {
  const json = `
    [["4\\n10 30 40 20","30"],["2\\n10 10","0"],["6\\n30 10 60 10 60 50","40"]]
    `;
  const params: AtcoderAnswers = JSON.parse(json);
  const customParams: AtcoderAnswers = [];
  runTest(mainA, params, customParams);
});

describe("dp - B", () => {
  const json = `
    [["5 3\\n10 30 40 50 20","30"],["3 1\\n10 20 10","20"],["2 100\\n10 10","0"],["10 4\\n40 10 20 70 80 10 20 70 80 60","40"]]
    `;
  const params: AtcoderAnswers = JSON.parse(json);
  const customParams: AtcoderAnswers = [];
  runTest(mainB, params, customParams);
});

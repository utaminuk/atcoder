import { runTest, AtcoderAnswers } from "../common";
import { main } from "../../src/dp/a/index";

describe("dp - a", () => {
  const json = `
  [["5 3\\n10 30 40 50 20","30"],["3 1\\n10 20 10","20"],["2 100\\n10 10","0"],["10 4\\n40 10 20 70 80 10 20 70 80 60","40"]]
    `;
  const params: AtcoderAnswers = JSON.parse(json);
  const customParams: AtcoderAnswers = [];
  runTest(main, params, customParams);
});

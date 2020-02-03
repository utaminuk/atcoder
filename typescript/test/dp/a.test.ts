import { runTest, AtcoderAnswers } from "../common";
import { main } from "../../src/dp/a/index";


describe("dp - a", () => {
  const json = `
    [["4\\n10 30 40 20","30"],["2\\n10 10","0"],["6\\n30 10 60 10 60 50","40"]]
    `;
  const params: AtcoderAnswers = JSON.parse(json);
  const customParams: AtcoderAnswers = [];
  runTest(main, params, customParams);
});


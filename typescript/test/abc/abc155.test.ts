import { runTest, AtcoderAnswers } from "../common";
import { main as mainA } from "../../src/abc155/a";
import { main as mainB } from "../../src/abc155/b";
// import { main as mainC } from "../../src/abc155/c";
// import { main as mainD } from "../../src/abc155/d";
// import { main as mainE } from "../../src/abc155/e";
// import { main as mainF } from "../../src/abc155/f";
const CONTEST = `abc155`;

describe(`${CONTEST} - A`, () => {
  const json = `
    [["5 7 5","Yes"],["4 4 4","No"],["4 9 6","No"],["3 3 4","Yes"]]
    `;
  const params: AtcoderAnswers = JSON.parse(json);
  const customParams: AtcoderAnswers = [];
  runTest(mainA, params, customParams);
});

describe(`${CONTEST} - B`, () => {
  const json = `
    [["5\\n6 7 9 10 31","APPROVED"],["3\\n28 27 24","DENIED"]]
  `;
  const params: AtcoderAnswers = JSON.parse(json);
  const customParams: AtcoderAnswers = [];
  runTest(mainB, params, customParams);
});

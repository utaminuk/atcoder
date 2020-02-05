import { runTest, AtcoderAnswers } from "./common";
import { main as mainA } from "../src/dp/a";
import { main as mainB } from "../src/dp/b";
import { main as mainC } from "../src/dp/c";
import { main as mainD } from "../src/dp/d";

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

describe("dp - C", () => {
  const json = `
[["3\\n10 40 70\\n20 50 80\\n30 60 90","210"],["1\\n100 10 1","100"],["7\\n6 7 8\\n8 8 3\\n2 5 2\\n7 8 6\\n4 6 8\\n2 3 4\\n7 5 1","46"]]
    `;
  const params: AtcoderAnswers = JSON.parse(json);
  const customParams: AtcoderAnswers = [];
  runTest(mainC, params, customParams);
});

describe("dp - D", () => {
  const json = `
  [["3 8\\n3 30\\n4 50\\n5 60","90"],["5 5\\n1 1000000000\\n1 1000000000\\n1 1000000000\\n1 1000000000\\n1 1000000000","5000000000"],["6 15\\n6 5\\n5 6\\n6 4\\n6 6\\n3 5\\n7 2","17"]]
    `;
  const params: AtcoderAnswers = JSON.parse(json);
  const customParams: AtcoderAnswers = [];
  runTest(mainD, params, customParams);
});

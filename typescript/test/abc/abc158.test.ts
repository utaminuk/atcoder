import { runTest, AtcoderAnswers } from "../common";
import { main as mainA } from "../../src/abc158/a";
import { main as mainB } from "../../src/abc158/b";
import { main as mainC } from "../../src/abc158/c";
import { main as mainD } from "../../src/abc158/d";
import { main as mainE } from "../../src/abc158/e";
import { main as mainF } from "../../src/abc158/f";
const CONTEST = `abc156`;

describe(`${CONTEST} - A`, () => {
  const json = `
    [["ABA","Yes"],["BBA","Yes"],["BBB","No"]]
    `;
  const params: AtcoderAnswers = JSON.parse(json);
  const customParams: AtcoderAnswers = [];
  runTest(mainA, params, customParams);
});

describe(`${CONTEST} - B`, () => {
  const json = `
    [["0","0"],["0","0"]]
    `;
  const params: AtcoderAnswers = JSON.parse(json);
  const customParams: AtcoderAnswers = [];
  runTest(mainB, params, customParams);
});

describe(`${CONTEST} - C`, () => {
  const json = `
    [["0","0"],["0","0"]]
    `;
  const params: AtcoderAnswers = JSON.parse(json);
  const customParams: AtcoderAnswers = [];
  runTest(mainC, params, customParams);
});

describe(`${CONTEST} - D`, () => {
  const json = `
    [["0","0"],["0","0"]]
    `;
  const params: AtcoderAnswers = JSON.parse(json);
  const customParams: AtcoderAnswers = [];
  runTest(mainD, params, customParams);
});

describe(`${CONTEST} - E`, () => {
  const json = `
    [["0","0"],["0","0"]]
    `;
  const params: AtcoderAnswers = JSON.parse(json);
  const customParams: AtcoderAnswers = [];
  runTest(mainE, params, customParams);
});

describe(`${CONTEST} - F`, () => {
  const json = `
    [["0","0"],["0","0"]]
    `;
  const params: AtcoderAnswers = JSON.parse(json);
  const customParams: AtcoderAnswers = [];
  runTest(mainF, params, customParams);
});

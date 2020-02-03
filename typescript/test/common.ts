export type AtcoderAnswers = string[][];

export function runTest(
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

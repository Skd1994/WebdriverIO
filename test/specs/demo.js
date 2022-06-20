xdescribe("testsuite", () => {
    it('tc_1',  () => {
        console.log("tc 1 ");
    });
    it('tc_2',  () => {
        console.log("tc 2 ");
    });
    it('tc_3',  () => {
        console.log("tc 3 ");
    });
});

describe("testsuite2", () => {
    it.skip('tc_4',  () => {
        console.log("tc 4 ");
    });
    it('tc_5',  () => {
        console.log("tc 5 ");
    });
    it('tc_6',  () => {
        console.log("tc 6 ");
    });
});

describe()
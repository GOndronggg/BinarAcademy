const { TestScheduler } = require("jest");

function sum(a, b) {
    return a + b;

}

test("check function sum should sum value a and b", () => {
    const a = 2;
    const b = 3;
    const c = 5;
    expect(sum(a,b)).toEqual(c);
})



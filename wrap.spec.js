const { expect } = require("chai");
const wrap = require("./wrap");



describe('wrap', () => {
  it("Is a function", () => {
    expect(typeof wrap).to.equal("function");
  });
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns whole string if string is shorter than Len', () => {
    expect(wrap("code", 10)).to.equal("code")
  });
  it('It should insert line breaks before or at Len', () => {
    expect(wrap("always coding", 7)).to.equal("always \ncoding")
    expect(wrap("always coding", 6)).to.equal("always\n coding")
  });
})

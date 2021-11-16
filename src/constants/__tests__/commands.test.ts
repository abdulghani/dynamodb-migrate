import Command from "../commands";

describe("test command enum", () => {
  it("works", () => {
    const commands = ["init", "create", "up", "down"];
    const enumed = commands.map((item) => (<any>Command)[item]);

    expect(enumed.filter((item) => !item)).toStrictEqual([]);
  });
});

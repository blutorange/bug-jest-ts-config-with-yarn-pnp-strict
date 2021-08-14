import { notNullish } from "../src/util";

describe("util", () => {
  describe("notNullish", () => {
    it("returns false for undefined", () => {
      expect(notNullish(undefined)).toBe(false);
    });
    it("returns false for null", () => {
      expect(notNullish(null)).toBe(false);
    });
    it("returns true for empty string", () => {
      expect(notNullish("")).toBe(true);
    });
    it("returns true for 0", () => {
      expect(notNullish(0)).toBe(true);
    });
  });
});

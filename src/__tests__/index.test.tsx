import { formatDate } from "@/utils/helpers";

it("should return the date in the format YYYY-MM-DD", () => {
  const date = new Date("2022-12-09");
  expect(formatDate(date)).toBe("2022-12-09");
});

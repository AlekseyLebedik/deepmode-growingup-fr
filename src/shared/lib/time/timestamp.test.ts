import { formatTimestampMLS, formatTimestampSeconds } from "./timestamp";

test("Check `formatTimestampMLS` function om the correct", () => {
  expect(formatTimestampMLS(1777605349654)).toEqual({
    hours: 5,
    minutes: 15,
    seconds: 49,
  });
});

test("Check `formatTimestampMLS` function with incorrect length timestamp", () => {
  const now = new Date();
  expect(formatTimestampMLS(17776)).toEqual({
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  });
});

test("Check `formatTimestampSeconds` function with incorrect length timestamp", () => {
  const now = new Date();
  expect(formatTimestampSeconds(17776)).toEqual({
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  });
});

test("Check `formatTimestampSeconds` function with incorrect length timestamp", () => {
  expect(formatTimestampSeconds(1777605349)).toEqual({
    hours: 5,
    minutes: 15,
    seconds: 49,
  });
});

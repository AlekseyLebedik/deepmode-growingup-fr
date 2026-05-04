import { displayDurationTimer, formatDurationMMSS } from "./timer";

test("Check correct display the hours", () => {
  expect(formatDurationMMSS(36122)).toEqual({
    hours: 10,
    minutes: 2,
    seconds: 2,
  });
  expect(formatDurationMMSS(18122)).toEqual({
    hours: 5,
    minutes: 2,
    seconds: 2,
  });
  expect(formatDurationMMSS(54122)).toEqual({
    hours: 15,
    minutes: 2,
    seconds: 2,
  });
});

test("Check correct display the minutes and seconds", () => {
  expect(formatDurationMMSS(122)).toEqual({ hours: 0, minutes: 2, seconds: 2 });
  expect(formatDurationMMSS(51)).toEqual({ hours: 0, minutes: 0, seconds: 51 });
  expect(formatDurationMMSS(360)).toEqual({
    hours: 0,
    minutes: 6,
    seconds: 0,
  });
});

test("Check correct display `displayDurationTimer` function", () => {
  expect(displayDurationTimer({ hours: 0, minutes: 6, seconds: 0 })).toBe(
    "06:00",
  );
  expect(displayDurationTimer({ hours: 35, minutes: 6, seconds: 0 })).toBe(
    "35:06:00",
  );
});

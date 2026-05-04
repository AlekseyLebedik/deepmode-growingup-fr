import type { FormatDurationType } from "./types";

function formatDurationMMSS(seconds: number): FormatDurationType {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return { hours, minutes, seconds: remainingSeconds };
}

function displayDurationTimer(duration: FormatDurationType): string {
  if (duration.hours)
    return `${String(duration.hours).padStart(2, "0")}:${String(duration.minutes).padStart(2, "0")}:${String(duration.seconds).padStart(2, "0")}`;

  return `${String(duration.minutes).padStart(2, "0")}:${String(duration.seconds).padStart(2, "0")}`;
}

export { formatDurationMMSS, displayDurationTimer };
export type { FormatDurationType };

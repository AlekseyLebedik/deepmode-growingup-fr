import type { FormatDurationType } from "./types";

function formatTimestampMLS(timestamp: number): FormatDurationType {
  const date =
    String(timestamp).length === 13 ? new Date(timestamp) : new Date();

  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
}

function formatTimestampSeconds(timestamp: number): FormatDurationType {
  return formatTimestampMLS(timestamp * 1000);
}

export { formatTimestampMLS, formatTimestampSeconds };

import { PropsWithChildren } from "react";
import { cn, bem } from "@/shared/lib/cls";
import {
  displayDurationTimer,
  formatDurationMMSS,
  FormatDurationType,
} from "@/shared/lib/time";

import { Clock } from "@/shared/images/svg";
import "./pres.scss";

interface IPresentation extends PropsWithChildren {
  durationTime: number;
  background: string;
  classes: string;
}

export default ({
  durationTime,
  classes = "cl--white",
  background = "#061E29",
}: IPresentation) => {
  const b = bem("display");
  const dt: FormatDurationType = formatDurationMMSS(durationTime);

  return (
    <div className={cn(b.block, classes)} style={{ background: background }}>
      <Clock />
      <div className={cn(b.elem("time"), b.mod("bold"))}>
        {displayDurationTimer(dt)}
      </div>
    </div>
  );
};

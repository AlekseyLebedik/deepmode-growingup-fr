import { bem, cn } from "@/shared/lib/cls";
import "./stick.scss";
import { useEffect, useRef } from "react";

type IStick = {
  height: number;
  is_active: boolean;
};

export default ({ height, is_active }: IStick) => {
  const tRef = useRef(null);
  const b = bem("stick");

  return (
    <div
      ref={tRef}
      data-testid="stick"
      style={{ height: `${height}px` }}
      className={cn("stick", b.mod(is_active ? "is_active" : "non_active"))}
    />
  );
};

import { Stick } from "@/shared/ui/stick";
import { Display } from "@/shared/ui/display";

import "./products.scss";

export function ProductsPage() {
  return (
    <div className="product-cnt">
      Products ...
      <div id="cnt">
        <Display durationTime={200} />
        <Stick is_active={true} height={10} />
        <Stick is_active={true} height={20} />
        <Stick is_active={true} height={500} />
        <Stick is_active={true} height={10} />
      </div>
    </div>
  );
}

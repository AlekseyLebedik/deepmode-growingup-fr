import { Stick } from "@/shared/ui/stick";
import { Display } from "@/shared/ui/display";
import { ColorPicker } from "@/shared/ui/colorpicker";
import { SemiCirclePicker } from "@/shared/ui/colorpicker/presentation";

import "./Products.scss";

export default function Products() {
  return (
    <div className="product-cnt">
      Products ...
      <div id="cnt">
        <ColorPicker />
      </div>
    </div>
  );
}

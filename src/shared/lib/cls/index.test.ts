import { cn, bem } from "./index";

test("Check on copy class after the `cn` function", () => {
  expect(cn("zab100 zab100")).toBe("zab100");
  expect(cn("dams", "drams", "zams", "dams", 10)).toBe("dams drams zams");
});

test("Check `bem` behavier", () => {
  const b = bem("stick");
  expect(b.elemMod("bem", "bold")).toBe("stick__bem--bold");
  expect(b.elem("zabs")).toBe("stick__zabs");
  expect(b.block).toBe("stick");
  expect(b.mod("dd")).toBe("stick--dd");
});

export function cn(...classes: any[]): string {
  const flat = classes.flat(Infinity);

  return flat
    .reduce((acc: string, current) => {
      if (typeof current !== "string") return acc;

      current.split(" ").forEach((v) => {
        if (v && !acc.includes(v)) {
          acc = `${acc} ${v}`;
        }
      });

      return acc;
    }, "")
    .trim();
}

export function bem(block: string) {
  return {
    block,
    elem: (el: string) => `${block}__${el}`,
    mod: (mod: string) => `${block}--${mod}`,
    elemMod: (el: string, mod: string) => `${block}__${el}--${mod}`,
  };
}

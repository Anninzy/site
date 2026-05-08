import type { ExtraClassProps, ParentProps } from "@/utils.ts";

export default function ({
  extraClass,
  children,
}: ExtraClassProps & ParentProps) {
  return (
    <div
      class={`grid aspect-square grid-cols-2 grid-rows-2 gap-12 rounded-3xl p-12 ${extraClass}`}
    >
      {children}
    </div>
  );
}

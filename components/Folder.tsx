import type { ExtraClassProps, ParentProps } from "@/utils.ts";

export default function ({
  extraClass,
  children,
}: ExtraClassProps & ParentProps) {
  return (
    <div
      class={`grid aspect-square grid-cols-2 gap-4 rounded-3xl bg-ctp-crust/60 p-4 *:rounded-3xl ${extraClass}`}
    >
      {children}
    </div>
  );
}

import { define } from "@/utils.ts";

export default define.layout(({ Component }) => {
  return (
    <div class="fcenter p-4">
      <Component />
    </div>
  );
});

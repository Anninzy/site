import { define, type NamedHrefProps } from "@/utils.ts";

function Workspace({ href, name }: NamedHrefProps) {
  return (
    <a
      href={href}
      class="rounded-full px-2 py-1 [writing-mode:sideways-lr] aria-[current=page]:bg-ctp-pink aria-[current=page]:text-ctp-crust aria-[current=page]:[view-transition-name:workspace-name]"
    >
      {name}
    </a>
  );
}

export default define.layout(({ Component }) => {
  return (
    <div class="flex size-full p-4 pl-0">
      <div class="m-2 size-fit flex-col rounded-full bg-ctp-crust p-2">
        <Workspace href="/" name="Home" />
        <Workspace href="/portfolio" name="Portfolio" />
        <Workspace href="/app" name="App" />
      </div>

      <div class="size-full rounded-2xl bg-[url(/wallpaper.jpg)] bg-cover [view-transition-name:workspace]">
        <Component />
      </div>
    </div>
  );
});

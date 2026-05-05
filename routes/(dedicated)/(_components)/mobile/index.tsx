import { define, type NamedHrefProps } from "@/utils.ts";
import Folder from "@/components/Folder.tsx";
import { timeZone } from "../../(_islands)/time.ts";
import Clock from "../../(_islands)/Clock.tsx";
import { Temporal } from "temporal-polyfill"; // TEMP

interface SubsubgridProps extends NamedHrefProps {
  fill: string;
  fillClass?: string;
  reverse?: boolean;
}

function Subsubgrid({
  fill,
  fillClass,
  href,
  name,
  reverse = false,
}: SubsubgridProps) {
  return (
    <div class={`h-full w-1/2 gap-4 ${reverse ? "flex-col-rev" : "flex-col"}`}>
      <a href={href}>
        <div class={`[view-transition-name:${name}]`}>
          <Folder>
            <div class="bg-ctp-teal" />
            <div class="bg-ctp-sky" />
            <div class="bg-ctp-lavender" />
            <div class="bg-ctp-mauve" />
          </Folder>
          <h1>{name}</h1>
        </div>
      </a>

      <div class="fcenter rounded-3xl bg-ctp-crust">
        <pre class={fillClass}>{fill}</pre>
      </div>
    </div>
  );
}

export default define.page(() => {
  const date = Temporal.Now.plainDateISO(timeZone);
  const today = date.day;
  const days = Array.from({ length: date.daysInMonth }, (_, i) => i + 1);

  return (
    <div
      id="grid"
      class="grid size-full gap-4 text-center *:not-[#subgrid]:rounded-3xl *:not-[#subgrid]:bg-ctp-crust"
    >
      <div class="py-6 [grid-area:clock]">
        <h2>Current time for Annin is</h2>
        <h1 class="text-5xl">
          <Clock mobile />
        </h1>
      </div>

      <div class="center aspect-square [grid-area:calendar]">
        <ul class="grid grid-cols-7 gap-4 p-4">
          {days.map((i) => (
            <li key={i} class="relative">
              {i === today ? (
                <>
                  <div class="absolute top-1/2 left-1/2 size-10 transform-[translate(-50%,-50%)] rounded-full bg-ctp-rosewater" />
                  <span class="relative text-ctp-crust">{i}</span>
                </>
              ) : (
                i
              )}
            </li>
          ))}
        </ul>
      </div>

      <div class="center text-3xl [grid-area:fill]">
        <h1 class="[writing-mode:sideways-lr]">o ^ o</h1>
      </div>

      <div id="subgrid" class="flex gap-4 [grid-area:subgrid]">
        <Subsubgrid name="App" href="/app" fill="o - o" />
        <Subsubgrid
          reverse
          name="Portfolio"
          href="/portfolio"
          fillClass="font-art text-xl text-left"
          fill={`
　／l、
（ﾟ､ ｡ ７
　l、~ ヽ
　ししと ）ノ`}
        />
      </div>
    </div>
  );
});

// https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape

import { define } from "@/utils.ts";
import type { ExtraClassProps, HrefProps } from "@/utils.ts";

interface EntryProps extends HrefProps {
  h1: string;
  p: string;
}

function Entry({ href, h1, p }: EntryProps) {
  return (
    <a href={`/app/${href}`}>
      <div class="mb-2 grid h-16 grid-cols-[auto_1fr] grid-rows-2 gap-2 rounded-full px-4 py-2 hover:bg-ctp-crust">
        <img src="/favicon.svg" class="row-span-full h-full" />
        <h1>{h1}</h1>
        <p>{p}</p>
      </div>
    </a>
  );
}

function Corner({ extraClass }: ExtraClassProps) {
  return (
    <svg viewBox="0 0 64 64" class={`size-10 fill-ctp-base ${extraClass}`}>
      <path d="M 64,0 C 64,32 32,64 0,64 h 64 z" />
    </svg>
  );
}

export default define.page(() => {
  return (
    <div class="vcenter size-full items-end">
      <Corner />
      <div class="max-h-[75%] w-[50%] overflow-scroll rounded-t-2xl bg-ctp-base p-4">
        <Entry h1="Tic Tac Toe" p="this one is squared" href="/app/ttt" />
      </div>
      <Corner extraClass="transform-[scaleX(-1)]" />
    </div>
  );
});

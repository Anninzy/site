// https://caniuse.com/mdn-css_selectors_scroll-marker

import { define } from "@/utils.ts";
import type { VNode } from "preact";
import Folder from "@/components/Folder.tsx";

interface AppProps {
  icon: VNode;
  href: string;
  name: string;
}

function App({ icon, href, name }: AppProps) {
  return (
    <a href={`/app/${href}`}>
      {icon}
      <p class="text-center">{name}</p>
    </a>
  );
}

export default define.page(() => {
  return (
    <div className="carousel aspect-square h-full rounded-3xl bg-ctp-crust/60 [view-transition-name:App] *:carousel-item">
      <Folder>
        <App
          href="ttt"
          name="Tic Tac Toe"
          icon={
            <svg class="size-full rounded-3xl bg-ctp-red p-4">
              <use href="/favicon.svg#use" />
            </svg>
          }
        />
      </Folder>
    </div>
  );
});

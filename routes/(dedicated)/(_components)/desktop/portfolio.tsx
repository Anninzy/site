import { define } from "@/utils.ts";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import type { OptionalParentProps } from "@/utils.ts";

interface SrcProps {
  src: string;
}

interface ItemProps extends OptionalParentProps {
  h1: string;
  h2: string;
  p: string;
  links: { href: string; icon: string }[];
}

interface GalleryProps {
  srcs: string[];
}

const bgClass = "absolute size-full mask-y-from-80%";
const slantClass =
  "bg-ctp-surface0/60 backdrop-blur-xs py-6 px-8 [clip-path:polygon(100%_0,calc(100%-2rem)_100%,0_100%,2rem_0)]";
const github = "mask-[url(/github.svg)] bg-ctp-text mask-contain";

function Video({ src }: SrcProps) {
  return (
    <video
      class={`${bgClass} object-cover`}
      src={src}
      autoplay
      muted
      loop
      data-z-index-0
    />
  );
}

function Image({ src }: SrcProps) {
  return <img class={`${bgClass} object-cover`} src={src} data-z-index-0 />;
}

function Gallery({ srcs }: GalleryProps) {
  function Carousel() {
    return (
      <div class="-mr-px flex animate-scroll">
        {srcs.map((src) => (
          <img class="max-w-none" key={src} src={src} />
        ))}
      </div>
    );
  }

  return (
    <div class={`${bgClass} flex overflow-x-hidden`} data-z-index-0>
      <Carousel />
      <Carousel />
    </div>
  );
}

function Item({ h1, h2, p, links, children }: ItemProps) {
  return (
    <>
      <div class="fcenter relative *:not-data-z-index-0:z-1">
        <div class="m-4 flex">
          <div class={`${slantClass} text-center break-all`}>
            <h1 class="text-7xl">{h1}</h1>
            <h2 class="text-2xl">{h2}</h2>
            <p class="text-xs">{p}</p>
          </div>

          <div class={`flex-col *:*:size-8 ${slantClass}`}>
            {links.map((link) => (
              <a href={link.href} target="_blank" class="fcenter">
                <div class={link.icon} />
              </a>
            ))}
          </div>
        </div>

        {children}
      </div>
    </>
  );
}

function Browser({ children }: OptionalParentProps) {
  return (
    <div class="mockup-window size-full rounded-xl bg-ctp-crust">
      {children}
    </div>
  );
}

export default define.page(() => {
  return (
    <div class="size-full p-4">
      <Browser>
        <div class="flex size-full flex-wrap gap-20 overflow-scroll bg-ctp-base">
          <Item
            h1="SITE"
            h2="Ad astra abyssosque"
            p="Built with Deno. Written in TypeScript."
            links={[
              {
                href: "https://github.com/anninzy/site",
                icon: github,
              },
            ]}
          >
            <ChevronDownIcon class="absolute bottom-10 w-[5vmin] animate-bounce" />
            <div data-z-index-0 class="absolute size-full p-12">
              <Browser>
                <div class="size-full bg-ctp-mantle p-12">
                  <Browser />
                </div>
              </Browser>
            </div>
          </Item>

          <Item
            h1="DUSE-MASH"
            h2="Reimplementation of a certain rhythm game"
            p="Built with Godot. Written in GDScript."
            links={[
              {
                href: "https://github.com/anninzy/duse-mash",
                icon: github,
              },
            ]}
          >
            <Video src="/duse-mash.mp4" />
          </Item>

          <Item
            h1="BOT"
            h2="Personal Discord Bot"
            p="Built with DiscordGo. Written in Go."
            links={[
              {
                href: "https://github.com/anninzy/bot",
                icon: github,
              },
            ]}
          >
            <Image src="" />
          </Item>

          <Item
            h1="ROFI-MODES"
            h2="Functional Rofi themes & modes"
            p="Built with <3. Written in Bash."
            links={[
              {
                href: "https://github.com/anninzy/rofi-modes",
                icon: github,
              },
            ]}
          >
            <Image src="https://raw.githubusercontent.com/anninzy/rofi-modes/master/screenshots/favorite.png" />
          </Item>

          <Item
            h1="THEMES"
            h2="Custom themes for various things"
            p="Discord, Firefox"
            links={[
              {
                href: "https://github.com/anninzy/catppuccin-discord-transparent",
                icon: github,
              },
              {
                href: "https://github.com/anninzy/firefox-transparent",
                icon: github,
              },
            ]}
          >
            <Gallery
              srcs={[
                "https://raw.githubusercontent.com/anninzy/catppuccin-discord-transparent/master/screenshots/mocha.png",
                "https://raw.githubusercontent.com/anninzy/firefox-transparent/master/screenshots/preview.png",
              ]}
            />
          </Item>

          <Item
            h1="NIXPKGS"
            h2="Package Maintainer"
            p="hypr-darkwindow, filemanager1-common, yaziPlugins.gvfs"
            links={[
              {
                href: "https://github.com/nixos/nixpkgs",
                icon: github,
              },
            ]}
          />
        </div>
      </Browser>
    </div>
  );
});

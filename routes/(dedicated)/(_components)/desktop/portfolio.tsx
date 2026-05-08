import { define } from "@/utils.ts";
import type { VNode } from "preact";
import type { OptionalParentProps } from "@/utils.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface SrcProps {
  src: string;
}

interface ItemProps extends OptionalParentProps {
  h1: string;
  h2: string;
  p: string;
  links: { href: string; icon: VNode }[];
}

interface GalleryProps {
  srcs: string[];
}

interface IframeProps {
  recurse: boolean;
}

const bgClass = "absolute size-full mask-y-from-80%";
const slantClass =
  "bg-ctp-surface0/60 backdrop-blur-xs py-6 px-8 [clip-path:polygon(100%_0,calc(100%-2rem)_100%,0_100%,2rem_0)]";
const pagesClass = "flex size-full flex-wrap";

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
      <div class="flex h-full animate-scroll will-change-transform">
        {srcs.map((src) => (
          <img class="h-full max-w-none" key={src} src={src} />
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

          <div class={`center ${slantClass}`}>
            <div class="rotate-10 flex-col gap-2">
              {links.map((link) => (
                <a href={link.href} target="_blank" class="-rotate-10 *:size-8">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {children}
      </div>
    </>
  );
}

function Item2() {
  return (
    <Item
      h1="DUSE-MASH"
      h2="Reimplementation of a certain rhythm game"
      p="Built with Godot. Written in GDScript."
      links={[
        {
          href: "https://github.com/anninzy/duse-mash",
          icon: <FontAwesomeIcon icon={faGithub} />,
        },
      ]}
    >
      <Video src="/duse-mash.mp4" />
    </Item>
  );
}

function Item1({ recurse }: IframeProps) {
  return (
    <Item
      h1="SITE"
      h2="Ad astra abyssosque"
      p="Built with Deno. Written in TypeScript."
      links={[
        {
          href: "https://github.com/anninzy/site",
          icon: <FontAwesomeIcon icon={faGithub} />,
        },
      ]}
    >
      <FontAwesomeIcon
        icon={faChevronDown}
        className="absolute bottom-10 w-[4vmin] animate-bounce will-change-transform"
      />
      {recurse ? (
        <>
          <div
            data-z-index-0
            class="absolute size-full scale-80 overflow-y-hidden"
          >
            <div id="syncee" class={pagesClass}>
              <Item1 recurse={false} />
              <Item2 />
            </div>
          </div>

          <div class="absolute size-full bg-ctp-base/60" data-z-index-0 />
        </>
      ) : undefined}
    </Item>
  );
}

export default define.page(() => {
  return (
    <div class="size-full p-4">
      <div class="mockup-window size-full rounded-xl bg-ctp-crust">
        <div
          id="syncer"
          class={`${pagesClass} gap-20 overflow-y-auto bg-ctp-base`}
        >
          <Item1 recurse />

          <Item2 />

          <Item
            h1="ROFI-MODES"
            h2="Functional Rofi themes & modes"
            p="Built with <3. Written in Bash."
            links={[
              {
                href: "https://github.com/anninzy/rofi-modes",
                icon: <FontAwesomeIcon icon={faGithub} />,
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
                icon: <FontAwesomeIcon icon={faGithub} />,
              },
              {
                href: "https://github.com/anninzy/firefox-transparent",
                icon: <FontAwesomeIcon icon={faGithub} />,
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
                icon: <FontAwesomeIcon icon={faGithub} />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
});

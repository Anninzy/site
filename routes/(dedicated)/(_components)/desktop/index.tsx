import { define, type ParentProps } from "@/utils.ts";
import Clock from "../../(_islands)/Clock.tsx";

function Terminal({ children }: ParentProps) {
  return (
    <div class="rounded-xl bg-ctp-base/60 p-4 backdrop-blur-xs">{children}</div>
  );
}

function Command({ children }: ParentProps) {
  return (
    <p class="whitespace-pre">
      <span class="text-ctp-green">[root@ani.v2.deno.net ~]#</span> {children}
    </p>
  );
}

export default define.page(() => {
  return (
    <div class="grid size-full grid-cols-[1fr_2fr] gap-2 overflow-x-auto p-4">
      <Terminal>
        <pre class="font-art">
          {`
　／l、
（ﾟ､ ｡ ７
　l、~ ヽ
　ししと ）ノ
`}
        </pre>
        <p>Annin</p>
        <p>Professional procrastinator.</p>
        <br />
        <Command>man acknowledgement</Command>
        <ul class="list-inside list-(--dash) **:[a]:link **:[a]:text-ctp-blue">
          <li>
            Favicon derived from{" "}
            <a href="https://j5daigada.tumblr.com/post/619306719958450176/whoops-my-finger-slipped-and-i-drew-modeus">
              daigada
            </a>
          </li>
          <li>
            Navbar inspired by{" "}
            <a href="https://github.com/caelestia-dots/shell">caelestia</a>
          </li>
        </ul>
        <Command>
          <span class="animate-blink bg-ctp-text">.</span>
        </Command>
      </Terminal>

      <Terminal>
        <Command>fastfetch</Command>
        <div class="flex gap-6">
          <pre class="text-xs">
            {`
          ▗▄▄▄       ▗▄▄▄▄    ▄▄▄▖
          ▜███▙       ▜███▙  ▟███▛
           ▜███▙       ▜███▙▟███▛
            ▜███▙       ▜██████▛
     ▟█████████████████▙ ▜████▛     ▟▙
    ▟███████████████████▙ ▜███▙    ▟██▙
           ▄▄▄▄▖           ▜███▙  ▟███▛
          ▟███▛             ▜██▛ ▟███▛
         ▟███▛               ▜▛ ▟███▛
▟███████████▛                  ▟██████████▙
▜██████████▛                  ▟███████████▛
      ▟███▛ ▟▙               ▟███▛
     ▟███▛ ▟██▙             ▟███▛
    ▟███▛  ▜███▙           ▝▀▀▀▀
    ▜██▛    ▜███▙ ▜██████████████████▛
     ▜▛     ▟████▙ ▜████████████████▛
           ▟██████▙         ▜███▙
          ▟███▛▜███▙         ▜███▙
         ▟███▛  ▜███▙         ▜███▙
         ▝▀▀▀    ▀▀▀▀▘         ▀▀▀▘
`}
          </pre>

          <div class="pt-6">
            <p>OS: NixOS Unstable</p>
            <p>Font: Monaspace</p>
            <p>Theme: Catppuccin Mocha</p>
          </div>
        </div>
        <Command>
          {`datetimectl \\
                          --user \\
                          --machine=annin@.host`}
        </Command>
        <p>bash: datetimectl: command not found</p>
        <Command>fuck</Command>
        <p>timedatectl --user --machine=annin@.host [enter/ctrl+c]</p>
        <p class="w-fit bg-ctp-red text-ctp-crust">
          Current time for Annin is <Clock mobile={false} />
        </p>
      </Terminal>
    </div>
  );
});

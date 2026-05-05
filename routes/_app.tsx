import { define } from "@/utils.ts";

export default define.page(({ Component }) => {
  return (
    <html class="size-full">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" />
        <title>Annin</title>
      </head>

      <body class="size-full bg-ctp-base text-ctp-text">
        <Component />
      </body>
    </html>
  );
});

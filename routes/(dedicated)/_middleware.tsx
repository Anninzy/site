import { define } from "@/utils.ts";
import { UAParser } from "ua-parser-js";

export default define.middleware(async (ctx) => {
  const userAgent = ctx.req.headers.get("user-agent");

  if (userAgent !== null && UAParser(userAgent).device.is("mobile")) {
    ctx.state.mobile = true;
  }

  return await ctx.next();
});

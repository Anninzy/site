import { createDefine } from "fresh";
import type { ComponentChildren } from "preact";

export interface ParentProps {
  children: ComponentChildren;
}

export interface OptionalParentProps {
  children?: ComponentChildren;
}

export interface HrefProps {
  href: string;
}

export interface OptionalHrefProps {
  href?: string;
}

export interface ExtraClassProps {
  extraClass?: string;
}

export interface NamedHrefProps extends HrefProps {
  name: string;
}

export interface State {
  mobile: boolean;
}

export const define = createDefine<State>();

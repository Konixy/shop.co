"use client";

import { PropsWithChildren } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

export default function Link(
  Props: PropsWithChildren &
    NextLinkProps &
    React.AnchorHTMLAttributes<HTMLAnchorElement>
) {
  return (
    <NextLink
      {...Props}
      className={
        "underline underline-offset-4 font-semibold " + Props.className
      }
    >
      {Props.children}
    </NextLink>
  );
}

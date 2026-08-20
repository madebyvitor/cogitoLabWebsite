import NextLink from "next/link";
import type { ComponentProps } from "react";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/utils";

type LinkProps = ComponentProps<typeof NextLink>;

export function Link({ href, className, ...props }: LinkProps) {
  const resolvedHref =
    typeof href === "string" ? withBasePath(href) : href;

  return (
    <NextLink href={resolvedHref} className={cn(className)} {...props} />
  );
}

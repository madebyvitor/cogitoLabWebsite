"use client";

import { useEffect } from "react";
import { withBasePath } from "@/lib/base-path";

export function LocaleRedirect() {
  useEffect(() => {
    const preferred = navigator.language.toLowerCase().startsWith("pt")
      ? "pt"
      : "en";
    window.location.replace(withBasePath(`/${preferred}/`));
  }, []);

  return null;
}

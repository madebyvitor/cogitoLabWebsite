import { routing } from "./routing";
import type pt from "../../messages/pt.json";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof pt;
  }
}

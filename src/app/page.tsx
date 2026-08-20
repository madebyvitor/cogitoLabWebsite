import { getTranslations } from "next-intl/server";
import { LocaleRedirect } from "@/components/LocaleRedirect";
import { Link } from "@/components/Link";

export default async function RootPage() {
  const t = await getTranslations({ locale: "pt", namespace: "LocaleRedirect" });

  return (
    <main className="mx-auto flex min-h-full max-w-lg flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <LocaleRedirect />
      <div className="space-y-2">
        <h1 className="font-heading text-3xl font-semibold text-primary">
          {t("title")}
        </h1>
        <p className="text-muted-foreground">{t("description")}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/pt/"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
        >
          {t("pt")}
        </Link>
        <Link
          href="/en/"
          className="rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-muted"
        >
          {t("en")}
        </Link>
      </div>
      <noscript>
        <p className="text-sm text-muted-foreground">
          JavaScript disabled — choose a language above.
        </p>
      </noscript>
    </main>
  );
}

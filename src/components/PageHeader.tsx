export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <header className="space-y-3 border-b border-border/70 pb-8">
      <h1 className="font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </header>
  );
}

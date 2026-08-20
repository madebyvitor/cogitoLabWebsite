import { AlertCircle } from "lucide-react";

export function PlaceholderNotice({ message }: { message: string }) {
  return (
    <div
      role="status"
      className="flex items-start gap-3 rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-foreground"
    >
      <AlertCircle className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
      <p>{message}</p>
    </div>
  );
}

import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  label?: string;
  sublabel?: string;
  className?: string;
  navyTrack?: boolean;
}

export function ProgressBar({
  value,
  label,
  sublabel,
  className,
  navyTrack = false,
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className={cn("space-y-2", className)}>
      {(label || sublabel) && (
        <div className="flex items-center justify-between">
          {label && (
            <span
              className="text-sm font-medium"
              style={{
                color: navyTrack
                  ? "rgba(255,255,255,0.8)"
                  : "oklch(var(--foreground))",
              }}
            >
              {label}
            </span>
          )}
          {sublabel && (
            <span
              className="text-xs"
              style={{
                color: navyTrack
                  ? "rgba(255,255,255,0.55)"
                  : "oklch(var(--muted-foreground))",
              }}
            >
              {sublabel}
            </span>
          )}
        </div>
      )}
      <div
        className="h-2.5 rounded-full overflow-hidden"
        style={{
          backgroundColor: navyTrack
            ? "rgba(255,255,255,0.15)"
            : "oklch(var(--accent))",
        }}
      >
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${clamped}%`,
            backgroundColor: navyTrack
              ? "oklch(var(--primary))"
              : "oklch(var(--navy))",
          }}
        />
      </div>
      <p
        className="text-xs"
        style={{
          color: navyTrack
            ? "rgba(255,255,255,0.5)"
            : "oklch(var(--muted-foreground))",
        }}
      >
        {clamped}% complete
      </p>
    </div>
  );
}

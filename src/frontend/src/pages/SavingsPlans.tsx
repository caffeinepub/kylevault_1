import { AppShell } from "@/components/AppShell";
import { DemoModal } from "@/components/DemoModal";
import { ProgressBar } from "@/components/ProgressBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Lock, Repeat } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    id: 1,
    icon: Repeat,
    title: "Daily Savings Plan",
    amountRange: "$10 – $100",
    frequency: "per day",
    duration: "30-day cycle",
    progress: 45,
    saved: "$135.00",
    goal: "$300.00",
    badge: "Flexible",
    badgeColor: "secondary" as const,
    desc: "Save a small amount every day. Perfect for building the habit of consistent saving in USD.",
    highlight: "Best for beginners",
  },
  {
    id: 2,
    icon: CalendarDays,
    title: "Weekly Savings Plan",
    amountRange: "$50 – $500",
    frequency: "per week",
    duration: "12-week cycle",
    progress: 68,
    saved: "$408.00",
    goal: "$600.00",
    badge: "Popular",
    badgeColor: "default" as const,
    desc: "A weekly commitment to grow your savings with moderate, manageable contributions.",
    highlight: "Most chosen plan",
  },
  {
    id: 3,
    icon: Lock,
    title: "30-Day Locked Savings",
    amountRange: "$500 locked",
    frequency: "one-time",
    duration: "30 days locked",
    progress: 90,
    saved: "$450.00",
    goal: "$500.00",
    badge: "High Yield",
    badgeColor: "outline" as const,
    desc: "Lock your funds for 30 days for focused saving. Best for disciplined goal-oriented savers.",
    highlight: "Highest discipline reward",
  },
];

export function SavingsPlans() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <AppShell>
      <div className="space-y-6 animate-fade-in pb-16">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Savings Plans</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Choose a plan that fits your financial goals. All amounts in USD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const isPopular = plan.badge === "Popular";
            return (
              <div
                key={plan.id}
                className="relative rounded-2xl border shadow-card p-6 space-y-5 hover:shadow-card-hover transition-all flex flex-col"
                style={{
                  backgroundColor: isPopular ? "oklch(var(--navy))" : "white",
                  borderColor: isPopular
                    ? "oklch(var(--navy))"
                    : "oklch(var(--border))",
                }}
                data-ocid={`plans.item.${i + 1}`}
              >
                {isPopular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1 rounded-full"
                    style={{ backgroundColor: "oklch(var(--primary))" }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="flex items-start justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: isPopular
                        ? "oklch(var(--white) / 0.15)"
                        : "oklch(var(--navy) / 0.08)",
                    }}
                  >
                    <Icon
                      size={22}
                      style={{
                        color: isPopular ? "white" : "oklch(var(--navy))",
                      }}
                    />
                  </div>
                  <Badge variant={plan.badgeColor}>{plan.badge}</Badge>
                </div>

                <div className="space-y-1.5">
                  <h2
                    className="font-bold text-xl"
                    style={{
                      color: isPopular ? "white" : "oklch(var(--foreground))",
                    }}
                  >
                    {plan.title}
                  </h2>
                  <p
                    className="text-xs font-medium"
                    style={{
                      color: isPopular
                        ? "oklch(var(--primary))"
                        : "oklch(var(--primary))",
                    }}
                  >
                    {plan.highlight}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: isPopular
                        ? "white/70"
                        : "oklch(var(--muted-foreground))",
                    }}
                  >
                    {plan.desc}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div
                    className="rounded-xl p-3"
                    style={{
                      backgroundColor: isPopular
                        ? "oklch(var(--white) / 0.1)"
                        : "oklch(var(--muted) / 0.5)",
                    }}
                  >
                    <p
                      className="text-xs"
                      style={{
                        color: isPopular
                          ? "white/60"
                          : "oklch(var(--muted-foreground))",
                      }}
                    >
                      Amount
                    </p>
                    <p
                      className="font-bold text-sm mt-0.5"
                      style={{
                        color: isPopular ? "white" : "oklch(var(--foreground))",
                      }}
                    >
                      {plan.amountRange}{" "}
                      <span
                        className="text-xs font-normal"
                        style={{ opacity: 0.65 }}
                      >
                        {plan.frequency}
                      </span>
                    </p>
                  </div>
                  <div
                    className="rounded-xl p-3"
                    style={{
                      backgroundColor: isPopular
                        ? "oklch(var(--white) / 0.1)"
                        : "oklch(var(--muted) / 0.5)",
                    }}
                  >
                    <p
                      className="text-xs"
                      style={{
                        color: isPopular
                          ? "white/60"
                          : "oklch(var(--muted-foreground))",
                      }}
                    >
                      Duration
                    </p>
                    <p
                      className="font-bold text-sm mt-0.5"
                      style={{
                        color: isPopular ? "white" : "oklch(var(--foreground))",
                      }}
                    >
                      {plan.duration}
                    </p>
                  </div>
                </div>

                <ProgressBar
                  value={plan.progress}
                  label="Progress"
                  sublabel={`${plan.saved} / ${plan.goal}`}
                  navyTrack={isPopular}
                />

                <Button
                  className="w-full rounded-full mt-auto font-semibold"
                  style={
                    isPopular
                      ? {
                          backgroundColor: "oklch(var(--primary))",
                          color: "white",
                        }
                      : {
                          backgroundColor: "oklch(var(--navy))",
                          color: "white",
                        }
                  }
                  onClick={() => setModalOpen(true)}
                  data-ocid={`plans.join.button.${i + 1}`}
                >
                  Activate Plan
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      <DemoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Activate Savings Plan"
        message="This is a demo. Plan activation is not functional. In a live version, you would confirm the plan terms and your USD funds would be automatically allocated."
      />
    </AppShell>
  );
}

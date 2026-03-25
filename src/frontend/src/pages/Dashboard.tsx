import { AppShell } from "@/components/AppShell";
import { DemoModal } from "@/components/DemoModal";
import { ProgressBar } from "@/components/ProgressBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuth } from "@/context/AuthContext";
import {
  AlertTriangle,
  ArrowDownCircle,
  ArrowUpCircle,
  CalendarDays,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { useState } from "react";

const transactions = [
  {
    id: 1,
    date: "Mar 25, 2026",
    type: "Deposit",
    description: "Bank Transfer",
    amount: "+$800.00",
    status: "Completed",
    positive: true,
  },
  {
    id: 2,
    date: "Mar 22, 2026",
    type: "Withdrawal",
    description: "Personal Transfer",
    amount: "-$350.00",
    status: "Completed",
    positive: false,
  },
  {
    id: 3,
    date: "Mar 18, 2026",
    type: "Interest Earned",
    description: "Monthly Interest",
    amount: "+$18.50",
    status: "Completed",
    positive: true,
  },
  {
    id: 4,
    date: "Mar 15, 2026",
    type: "Deposit",
    description: "Round-Up Savings",
    amount: "+$125.00",
    status: "Completed",
    positive: true,
  },
  {
    id: 5,
    date: "Mar 10, 2026",
    type: "Withdrawal",
    description: "Emergency Fund",
    amount: "-$400.00",
    status: "Completed",
    positive: false,
  },
  {
    id: 6,
    date: "Mar 05, 2026",
    type: "Deposit",
    description: "Paycheck Allocation",
    amount: "+$1,500.00",
    status: "Completed",
    positive: true,
  },
  {
    id: 7,
    date: "Feb 28, 2026",
    type: "Deposit",
    description: "Bank Transfer",
    amount: "+$500.00",
    status: "Pending",
    positive: true,
  },
];

export function Dashboard() {
  const { user } = useAuth();
  const [modal, setModal] = useState<"deposit" | "withdraw" | null>(null);

  const firstName = user?.name?.split(" ")[0] ?? "John";

  return (
    <AppShell>
      <div className="space-y-5 animate-fade-in pb-16">
        {/* Header */}
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-1"
            style={{ color: "oklch(var(--success))" }}
          >
            Your money, clearly tracked and always accessible.
          </p>
          <h1 className="text-2xl font-bold text-foreground">
            Welcome Back, {firstName}!
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Here's an overview of your savings activity.
          </p>
        </div>

        {/* Demo disclaimer banner */}
        <div
          className="flex items-start gap-3 rounded-2xl px-4 py-3.5"
          style={{
            backgroundColor: "oklch(var(--navy) / 0.06)",
            border: "1px solid oklch(var(--navy) / 0.15)",
          }}
          data-ocid="dashboard.disclaimer.panel"
        >
          <AlertTriangle
            size={16}
            className="mt-0.5 shrink-0"
            style={{ color: "oklch(var(--navy))" }}
          />
          <p className="text-sm" style={{ color: "oklch(var(--navy))" }}>
            <span className="font-semibold">⚠️ Demo Mode:</span> MTVault is a
            demo concept platform. No real funds are held or processed.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Wallet Balance */}
          <div
            className="rounded-2xl p-6 space-y-3 text-white"
            style={{ backgroundColor: "oklch(var(--navy))" }}
            data-ocid="dashboard.balance.card"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/70 font-medium">
                Wallet Balance
              </p>
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                <Wallet size={16} className="text-white" />
              </div>
            </div>
            <p className="text-4xl font-extrabold">$3,200.00</p>
            <p className="text-xs text-white/60">Available funds</p>
          </div>

          {/* Total Saved */}
          <div
            className="bg-white rounded-2xl border border-border shadow-card p-6 space-y-3"
            data-ocid="dashboard.saved.card"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground font-medium">
                Total Saved
              </p>
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "oklch(var(--navy) / 0.08)" }}
              >
                <TrendingUp size={16} style={{ color: "oklch(var(--navy))" }} />
              </div>
            </div>
            <p className="text-3xl font-extrabold text-foreground">
              $18,450.00
            </p>
            <p className="text-xs text-muted-foreground">Across all plans</p>
          </div>

          {/* Active Plan */}
          <div
            className="bg-white rounded-2xl border border-border shadow-card p-6 space-y-3"
            data-ocid="dashboard.plans.card"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground font-medium">
                Active Plan
              </p>
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "oklch(var(--navy) / 0.08)" }}
              >
                <CalendarDays
                  size={16}
                  style={{ color: "oklch(var(--navy))" }}
                />
              </div>
            </div>
            <p className="text-2xl font-extrabold text-foreground">
              30-Day Locked
            </p>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 flex-wrap">
          <Button
            className="rounded-full gap-2 text-white font-semibold px-6 shadow-cta"
            style={{ backgroundColor: "oklch(var(--navy))" }}
            onClick={() => setModal("deposit")}
            data-ocid="dashboard.deposit.button"
          >
            <ArrowDownCircle size={16} /> Deposit
          </Button>
          <Button
            variant="outline"
            className="rounded-full gap-2 font-semibold px-6"
            onClick={() => setModal("withdraw")}
            data-ocid="dashboard.withdraw.button"
          >
            <ArrowUpCircle size={16} /> Withdraw
          </Button>
        </div>

        {/* Savings progress */}
        <div
          className="bg-white rounded-2xl border border-border shadow-card p-6"
          data-ocid="dashboard.progress.card"
        >
          <h2 className="font-bold text-foreground mb-5 text-lg">
            Savings Goal Progress
          </h2>
          <ProgressBar
            value={65}
            label="Save $5,000 by Dec 2026"
            sublabel="$3,250.00 / $5,000.00"
          />
        </div>

        {/* Transaction history */}
        <div
          className="bg-white rounded-2xl border border-border shadow-card overflow-hidden"
          data-ocid="dashboard.transactions.table"
        >
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <h2 className="font-bold text-foreground">Transaction History</h2>
            <Badge variant="secondary" className="text-xs">
              Demo Data
            </Badge>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow
                  style={{ backgroundColor: "oklch(var(--muted) / 0.5)" }}
                >
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((tx, i) => (
                  <TableRow
                    key={tx.id}
                    data-ocid={`transactions.item.${i + 1}`}
                  >
                    <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                      {tx.date}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1.5">
                        {tx.positive ? (
                          <ArrowDownCircle
                            size={14}
                            style={{ color: "oklch(var(--success))" }}
                          />
                        ) : (
                          <ArrowUpCircle
                            size={14}
                            style={{ color: "oklch(var(--destructive))" }}
                          />
                        )}
                        <span className="text-sm font-medium text-foreground">
                          {tx.type}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {tx.description}
                    </TableCell>
                    <TableCell
                      className="text-sm font-bold"
                      style={{
                        color: tx.positive
                          ? "oklch(var(--success))"
                          : "oklch(var(--destructive))",
                      }}
                    >
                      {tx.amount}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          tx.status === "Completed" ? "secondary" : "outline"
                        }
                        className="text-xs"
                      >
                        {tx.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <DemoModal
        open={modal === "deposit"}
        onClose={() => setModal(null)}
        title="Deposit Funds"
        message="This is a demo. No real transactions are processed. In a live version, you would enter an amount and confirm a deposit to your USD wallet."
      />
      <DemoModal
        open={modal === "withdraw"}
        onClose={() => setModal(null)}
        title="Withdraw Funds"
        message="This is a demo. No real transactions are processed. Withdrawals would be processed within 24–48 hours in a live platform."
      />
    </AppShell>
  );
}

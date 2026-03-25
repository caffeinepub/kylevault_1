import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Eye,
  Layers,
  Lock,
  PiggyBank,
  Shield,
  ShieldCheck,
  Tag,
  TrendingUp,
  UserPlus,
  Wallet,
} from "lucide-react";
import { motion } from "motion/react";

const trustItems = [
  {
    icon: Shield,
    title: "Funds Protected",
    desc: "Your funds are protected with secure payment systems",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    desc: "Transparent savings tracking — no surprises",
  },
  {
    icon: Tag,
    title: "No Hidden Charges",
    desc: "Zero hidden fees or extra charges ever",
  },
  {
    icon: Lock,
    title: "Modern Security",
    desc: "Built with modern security standards",
  },
];

const steps = [
  {
    num: "01",
    icon: UserPlus,
    title: "Create an Account",
    desc: "Sign up in seconds. No paperwork, no waiting. Your savings journey starts here.",
  },
  {
    num: "02",
    icon: PiggyBank,
    title: "Choose a Savings Plan",
    desc: "Pick daily, weekly, or 30-day locked savings that matches your financial goals.",
  },
  {
    num: "03",
    icon: ArrowUpRight,
    title: "Save & Withdraw Anytime",
    desc: "Access your funds when you need them. Flexible withdrawals on eligible plans.",
  },
];

const features = [
  {
    icon: TrendingUp,
    title: "Smart Savings Tracking",
    desc: "Monitor your balance and transaction history with full transparency. Real-time progress on every plan.",
  },
  {
    icon: Layers,
    title: "Flexible Deposit Options",
    desc: "Deposit daily, weekly, or as a lump sum. Mix and match plans to hit multiple goals at once.",
  },
  {
    icon: Wallet,
    title: "Easy Withdrawal System",
    desc: "Unlock funds from flexible plans instantly. No hidden fees, no complicated processes.",
  },
  {
    icon: ShieldCheck,
    title: "Clean User Dashboard",
    desc: "Your personalized dashboard shows balance, plans, history, and progress in one clean view.",
  },
];

const miniTxns = [
  {
    id: "t1",
    label: "Deposit",
    amt: "+$500.00",
    date: "Today",
    positive: true,
  },
  {
    id: "t2",
    label: "Withdrawal",
    amt: "-$200.00",
    date: "Yesterday",
    positive: false,
  },
  {
    id: "t3",
    label: "Interest Earned",
    amt: "+$12.50",
    date: "Mar 20",
    positive: true,
  },
];

function DashboardIllustration() {
  return (
    <motion.div
      className="relative w-full max-w-sm mx-auto"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Main card */}
      <div className="bg-white rounded-2xl shadow-card-hover p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Wallet Balance</p>
            <p
              className="text-3xl font-extrabold"
              style={{ color: "oklch(var(--navy))" }}
            >
              $2,450.00
            </p>
          </div>
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "oklch(var(--navy) / 0.08)" }}
          >
            <Wallet size={18} style={{ color: "oklch(var(--navy))" }} />
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Goal: $5,000.00</span>
            <span
              className="font-semibold"
              style={{ color: "oklch(var(--primary))" }}
            >
              68%
            </span>
          </div>
          <div
            className="h-2 rounded-full"
            style={{ backgroundColor: "oklch(var(--accent))" }}
          >
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: "68%", backgroundColor: "oklch(var(--navy))" }}
            />
          </div>
        </div>
        <div className="space-y-1.5">
          {miniTxns.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between py-1.5 border-b border-border last:border-0"
            >
              <div>
                <p className="text-xs font-medium text-foreground">
                  {tx.label}
                </p>
                <p className="text-xs text-muted-foreground">{tx.date}</p>
              </div>
              <span
                className="text-xs font-bold"
                style={{
                  color: tx.positive
                    ? "oklch(var(--success))"
                    : "oklch(var(--destructive))",
                }}
              >
                {tx.amt}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            className="text-xs font-semibold py-2 rounded-full text-white"
            style={{ backgroundColor: "oklch(var(--primary))" }}
          >
            Deposit
          </button>
          <button
            type="button"
            className="text-xs font-semibold py-2 rounded-full border border-border text-foreground"
          >
            Withdraw
          </button>
        </div>
      </div>
      {/* Floating badge */}
      <div
        className="absolute -top-3 -right-3 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-cta"
        style={{ backgroundColor: "oklch(var(--primary))" }}
      >
        Live Preview
      </div>
      {/* Small decorative card */}
      <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card px-4 py-2.5 flex items-center gap-2">
        <CalendarDays size={14} style={{ color: "oklch(var(--navy))" }} />
        <div>
          <p
            className="text-xs font-semibold"
            style={{ color: "oklch(var(--navy))" }}
          >
            Weekly Plan
          </p>
          <p className="text-xs text-muted-foreground">Active</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Home() {
  return (
    <div className="min-h-screen flex flex-col pb-10">
      <Navbar />

      {/* Hero — deep navy */}
      <section
        className="px-4 sm:px-6 py-16 sm:py-24"
        style={{ backgroundColor: "oklch(var(--navy))" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left text */}
            <motion.div
              className="flex-1 space-y-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium border border-white/20 text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Digital Savings Platform · USD
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Secure Your Money.
                <br />
                <span style={{ color: "oklch(var(--primary))" }}>
                  Build Your Future.
                </span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                KyleVault is a modern digital savings platform designed to help
                you save consistently and securely with full transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/signup">
                  <Button
                    size="lg"
                    className="rounded-full gap-2 w-full sm:w-auto text-white shadow-cta font-semibold px-8"
                    style={{ backgroundColor: "oklch(var(--primary))" }}
                    data-ocid="hero.primary_button"
                  >
                    Start Saving <ArrowRight size={16} />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full w-full sm:w-auto border-white/30 text-white hover:bg-white/10 font-semibold px-8"
                    style={{ backgroundColor: "transparent" }}
                    data-ocid="hero.secondary_button"
                  >
                    View Dashboard
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right illustration */}
            <div className="flex-1 w-full lg:max-w-sm xl:max-w-md">
              <DashboardIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip — white bg */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center gap-3"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "oklch(var(--navy) / 0.08)" }}
                >
                  <Icon size={22} style={{ color: "oklch(var(--navy))" }} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — light gray bg */}
      <section id="how-it-works" className="px-4 sm:px-6 py-20 bg-muted/60">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "oklch(var(--primary))" }}
            >
              Simple Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-muted-foreground text-base max-w-md mx-auto">
              Three simple steps to start saving with intention.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(({ num, icon: Icon, title, desc }, i) => (
              <motion.div
                key={num}
                className="rounded-2xl p-7 space-y-5 relative overflow-hidden"
                style={{ backgroundColor: "oklch(var(--navy) / 0.88)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {/* Number badge */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-extrabold text-white"
                  style={{ backgroundColor: "oklch(var(--primary))" }}
                >
                  {num}
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/15">
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1.5">
                    {title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {desc}
                  </p>
                </div>
                {/* Decorative circle */}
                <div
                  className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-10"
                  style={{ backgroundColor: "oklch(var(--primary))" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features — white bg */}
      <section id="features" className="px-4 sm:px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "oklch(var(--primary))" }}
            >
              Platform Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Everything You Need
            </h2>
            <p className="text-muted-foreground text-base max-w-md mx-auto">
              Built for consistent saving, flexible access, and full
              transparency.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="bg-white rounded-2xl border border-border shadow-card p-6 space-y-4 hover:shadow-card-hover transition-shadow"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "oklch(var(--navy) / 0.07)" }}
                >
                  <Icon size={22} style={{ color: "oklch(var(--navy))" }} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1.5">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner — light gray */}
      <section className="px-4 sm:px-6 py-20 bg-muted/60">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Ready to start saving in USD?
          </h2>
          <p className="text-muted-foreground text-lg">
            Join the KyleVault demo and explore a premium savings experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/signup">
              <Button
                size="lg"
                className="rounded-full gap-2 shadow-cta font-semibold px-8 text-white"
                style={{ backgroundColor: "oklch(var(--primary))" }}
                data-ocid="cta.primary_button"
              >
                Create Free Account <ArrowRight size={16} />
              </Button>
            </Link>
            <Link to="/savings-plans">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full gap-2 font-semibold px-8"
                data-ocid="cta.secondary_button"
              >
                View Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Bottom disclaimer bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 py-2 px-4 text-center"
        style={{
          backgroundColor: "oklch(var(--navy) / 0.95)",
          backdropFilter: "blur(8px)",
        }}
      >
        <p className="text-xs text-white/70">
          <span className="font-semibold text-white">Demo only:</span> KyleVault
          is a concept demo and does not hold or manage real funds.
        </p>
      </div>
    </div>
  );
}

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

const trustBadges = [
  {
    icon: Shield,
    title: "Secure Infrastructure",
    desc: "Built on secure payment infrastructure",
  },
  {
    icon: Eye,
    title: "Transparent Tracking",
    desc: "Full visibility into every transaction",
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

const securityCards = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    desc: "Your savings data is protected with enterprise-level encryption and multi-layer security protocols.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by Design",
    desc: "Every feature is built around user trust — transparent records, no hidden fees, and clear reporting.",
  },
  {
    icon: TrendingUp,
    title: "Reliable Tracking",
    desc: "Real-time progress tracking and accurate savings history give you full control of your financial journey.",
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
    title: "Easy Withdrawals",
    desc: "Unlock funds from flexible plans instantly. No hidden fees, no complicated processes.",
  },
  {
    icon: ShieldCheck,
    title: "Clean Dashboard Experience",
    desc: "Your personalized dashboard shows balance, plans, history, and progress in one clean view.",
  },
];

const miniTxns = [
  {
    id: "t1",
    label: "Deposit",
    amt: "+$800.00",
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
    amt: "+$18.50",
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
              $3,200.00
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
            <span className="text-muted-foreground">
              Savings Goal: $5,000.00
            </span>
            <span
              className="font-semibold"
              style={{ color: "oklch(var(--success))" }}
            >
              65%
            </span>
          </div>
          <div
            className="h-2 rounded-full"
            style={{ backgroundColor: "oklch(var(--accent))" }}
          >
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: "65%", backgroundColor: "oklch(var(--navy))" }}
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
            style={{ backgroundColor: "oklch(var(--navy))" }}
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
        style={{ backgroundColor: "oklch(var(--success))" }}
      >
        ✓ Secure
      </div>
      {/* Small decorative card */}
      <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card px-4 py-2.5 flex items-center gap-2">
        <CalendarDays size={14} style={{ color: "oklch(var(--navy))" }} />
        <div>
          <p
            className="text-xs font-semibold"
            style={{ color: "oklch(var(--navy))" }}
          >
            30-Day Locked
          </p>
          <p className="text-xs text-muted-foreground">Active Plan</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero — pale gray bg per design spec */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-background relative overflow-hidden">
        {/* Faint wave / abstract background shapes */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            aria-hidden="true"
            className="absolute top-0 right-0 w-2/3 opacity-[0.04]"
            viewBox="0 0 600 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="400"
              cy="-50"
              rx="300"
              ry="300"
              fill="oklch(0.2 0.065 255)"
            />
            <ellipse
              cx="550"
              cy="200"
              rx="200"
              ry="200"
              fill="oklch(0.2 0.065 255)"
            />
          </svg>
          <svg
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-1/2 opacity-[0.04]"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="0"
              cy="300"
              rx="250"
              ry="250"
              fill="oklch(0.2 0.065 255)"
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left text */}
            <motion.div
              className="flex-1 space-y-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
                style={{
                  backgroundColor: "oklch(var(--navy) / 0.08)",
                  color: "oklch(var(--navy))",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "oklch(var(--success))" }}
                />
                Trusted Worldwide
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
                style={{ color: "oklch(var(--foreground))" }}
              >
                Secure Your Money.
                <br />
                <span style={{ color: "oklch(var(--navy))" }}>
                  Grow with Confidence.
                </span>
              </h1>
              <p
                className="text-lg leading-relaxed max-w-lg"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                MTVault is a modern savings platform designed to help you build
                financial discipline with security, transparency, and ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/dashboard">
                  <Button
                    size="lg"
                    className="rounded-full gap-2 w-full sm:w-auto text-white shadow-cta font-semibold px-8"
                    style={{ backgroundColor: "oklch(var(--navy))" }}
                    data-ocid="hero.primary_button"
                  >
                    Get Started <ArrowRight size={16} />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full w-full sm:w-auto font-semibold px-8"
                    style={{
                      borderColor: "oklch(var(--navy) / 0.3)",
                      color: "oklch(var(--navy))",
                    }}
                    data-ocid="hero.secondary_button"
                  >
                    Login
                  </Button>
                </Link>
              </div>
              <p
                className="text-sm font-medium"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                <span
                  className="inline-block w-2 h-2 rounded-full mr-2 align-middle"
                  style={{ backgroundColor: "oklch(var(--success))" }}
                />
                Trusted by users worldwide • Built for secure and consistent
                savings
              </p>
            </motion.div>

            {/* Right illustration */}
            <div className="flex-1 w-full lg:max-w-sm xl:max-w-md pb-8">
              <DashboardIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Trust badge strip — white bg */}
      <section className="bg-white border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center gap-3"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "oklch(var(--navy) / 0.07)" }}
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

      {/* Security section — light gray bg */}
      <section className="px-4 sm:px-6 py-20 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "oklch(var(--success))" }}
            >
              Security First
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Your financial security is our top priority.
            </h2>
            <p className="text-muted-foreground text-base max-w-md mx-auto">
              Every aspect of MTVault is built around protecting your savings
              and giving you complete peace of mind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityCards.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="bg-white rounded-2xl border border-border shadow-card p-6 space-y-4 hover:shadow-card-hover transition-all hover:-translate-y-1"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
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

      {/* How It Works — white bg */}
      <section id="how-it-works" className="px-4 sm:px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "oklch(var(--navy))" }}
            >
              Simple Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-muted-foreground text-base max-w-md mx-auto">
              Simple, transparent, and built for everyday use.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(({ num, icon: Icon, title, desc }, i) => (
              <motion.div
                key={num}
                className="rounded-2xl p-7 space-y-5 relative overflow-hidden text-white"
                style={{ backgroundColor: "oklch(var(--navy))" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-extrabold"
                  style={{
                    backgroundColor: "oklch(var(--success))",
                    color: "white",
                  }}
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
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-10 bg-white" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features — light gray bg */}
      <section id="features" className="px-4 sm:px-6 py-20 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "oklch(var(--navy))" }}
            >
              Platform Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Everything You Need
            </h2>
            <p className="text-muted-foreground text-base max-w-md mx-auto">
              Designed to give you full control of your savings.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="bg-white rounded-2xl border border-border shadow-card p-6 space-y-4 hover:shadow-card-hover hover:-translate-y-1 transition-all"
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

      {/* CTA banner — navy */}
      <section
        className="px-4 sm:px-6 py-20"
        style={{ backgroundColor: "oklch(var(--navy))" }}
      >
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to grow your savings?
          </h2>
          <p className="text-white/70 text-lg">
            Join the MTVault demo and explore a premium savings experience built
            for trust and transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/dashboard">
              <Button
                size="lg"
                className="rounded-full gap-2 font-semibold px-8 bg-white hover:bg-white/90"
                style={{ color: "oklch(var(--navy))" }}
                data-ocid="cta.primary_button"
              >
                Get Started <ArrowRight size={16} />
              </Button>
            </Link>
            <Link to="/savings-plans">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full gap-2 font-semibold px-8 border-white/30 text-white hover:bg-white/10"
                style={{ backgroundColor: "transparent" }}
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
          backgroundColor: "oklch(var(--navy) / 0.96)",
          backdropFilter: "blur(8px)",
        }}
      >
        <p className="text-xs text-white/70">
          <span className="font-semibold text-white">Demo only:</span> MTVault
          is a concept demo and does not hold or manage real funds.
        </p>
      </div>
    </div>
  );
}

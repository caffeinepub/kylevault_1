import { Link } from "@tanstack/react-router";
import { Shield } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "oklch(var(--navy))" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                <Shield size={16} className="text-white" />
              </div>
              <span className="font-bold text-white text-lg">MTVault</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              A digital savings platform concept built to demonstrate modern
              fintech design and trust-focused UX.
            </p>
            <div className="flex items-start gap-2 mt-1 bg-white/10 rounded-xl p-3">
              <Shield size={14} className="text-white/70 mt-0.5 shrink-0" />
              <p className="text-xs text-white/70 leading-relaxed">
                MTVault is a{" "}
                <strong className="text-white">demo concept platform</strong>{" "}
                created for presentation purposes only. It does not hold,
                manage, or process real funds.
              </p>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-white uppercase tracking-widest">
                Company
              </p>
              <Link
                to="/"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Home
              </Link>
              <a
                href="/#features"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="/#how-it-works"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                How It Works
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-white uppercase tracking-widest">
                Product
              </p>
              <Link
                to="/savings-plans"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Savings Plans
              </Link>
              <Link
                to="/dashboard"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Profile
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-white uppercase tracking-widest">
                Security
              </p>
              <span className="text-sm text-white/60">
                Secure Infrastructure
              </span>
              <span className="text-sm text-white/60">
                Transparent Tracking
              </span>
              <span className="text-sm text-white/60">Modern Standards</span>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-white uppercase tracking-widest">
                Legal
              </p>
              <span className="text-sm text-white/40 cursor-default">
                Terms &amp; Conditions
              </span>
              <span className="text-sm text-white/40 cursor-default">
                Privacy Policy
              </span>
              <span className="text-sm text-white/40 cursor-default">
                Disclaimer
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {year} MTVault. Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-xs text-white/40 italic">
            Demo platform — not a real financial institution.
          </p>
        </div>
      </div>
    </footer>
  );
}

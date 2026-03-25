import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  LayoutDashboard,
  LogOut,
  Menu,
  PiggyBank,
  Shield,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate({ to: "/" });
  };

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "JD";

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "oklch(var(--navy))",
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 shrink-0"
          data-ocid="nav.link"
        >
          <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
            <Shield size={16} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">
            MTVault
          </span>
        </Link>

        {/* Desktop center nav */}
        {!isLoggedIn ? (
          <nav className="hidden md:flex items-center gap-6 mx-auto">
            <a
              href="/#features"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              How It Works
            </a>
            <Link
              to="/savings-plans"
              className="text-sm text-white/70 hover:text-white transition-colors"
              data-ocid="nav.link"
            >
              Plans
            </Link>
          </nav>
        ) : (
          <nav className="hidden md:flex items-center gap-6 mx-auto">
            <Link
              to="/dashboard"
              className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1.5"
              data-ocid="nav.link"
            >
              <LayoutDashboard size={14} /> Dashboard
            </Link>
            <Link
              to="/savings-plans"
              className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1.5"
              data-ocid="nav.link"
            >
              <PiggyBank size={14} /> Plans
            </Link>
            <Link
              to="/profile"
              className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1.5"
              data-ocid="nav.link"
            >
              <User size={14} /> Profile
            </Link>
          </nav>
        )}

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          {!isLoggedIn ? (
            <>
              <Link to="/login">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden sm:flex text-sm font-medium text-white/80 hover:text-white hover:bg-white/10"
                  data-ocid="nav.login.button"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  size="sm"
                  className="rounded-full text-sm font-semibold px-5 bg-white hover:bg-white/90"
                  style={{ color: "oklch(var(--navy))" }}
                  data-ocid="nav.signup.button"
                >
                  Get Started
                </Button>
              </Link>
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 hover:bg-white/10"
                  data-ocid="nav.user.button"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">
                      {initials}
                    </span>
                  </div>
                  <span className="hidden sm:inline text-sm font-medium text-white">
                    {user?.name.split(" ")[0]}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link
                    to="/profile"
                    className="flex items-center gap-2"
                    data-ocid="nav.profile.link"
                  >
                    <User size={14} /> Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-destructive flex items-center gap-2"
                  data-ocid="nav.logout.button"
                >
                  <LogOut size={14} /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="nav.mobile.toggle"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-4 py-3 flex flex-col gap-3"
          style={{
            backgroundColor: "oklch(var(--navy))",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          {!isLoggedIn ? (
            <>
              <a href="/#features" className="text-sm text-white/70 py-1">
                Features
              </a>
              <a href="/#how-it-works" className="text-sm text-white/70 py-1">
                How It Works
              </a>
              <Link
                to="/savings-plans"
                className="text-sm text-white/70 py-1"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.link"
              >
                Plans
              </Link>
              <div className="flex gap-2 pt-1">
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white/30 text-white bg-transparent hover:bg-white/10"
                    data-ocid="mobile.login.button"
                  >
                    Login
                  </Button>
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1"
                >
                  <Button
                    size="sm"
                    className="w-full rounded-full bg-white hover:bg-white/90"
                    style={{ color: "oklch(var(--navy))" }}
                    data-ocid="mobile.signup.button"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="text-sm text-white/70 py-1"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.link"
              >
                Dashboard
              </Link>
              <Link
                to="/savings-plans"
                className="text-sm text-white/70 py-1"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.link"
              >
                Plans
              </Link>
              <Link
                to="/profile"
                className="text-sm text-white/70 py-1"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.link"
              >
                Profile
              </Link>
              <button
                type="button"
                onClick={() => {
                  handleLogout();
                  setMobileOpen(false);
                }}
                className="text-sm text-red-300 text-left py-1"
                data-ocid="mobile.logout.button"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
}

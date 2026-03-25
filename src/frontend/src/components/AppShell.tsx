import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, LogOut, PiggyBank, User } from "lucide-react";
import type { ReactNode } from "react";

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/savings-plans", icon: PiggyBank, label: "Savings Plans" },
  { to: "/profile", icon: User, label: "Profile" },
];

export function AppShell({ children }: { children: ReactNode }) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const handleLogout = () => {
    logout();
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <Navbar />
      <div className="flex flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-6 gap-6">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-56 shrink-0">
          <nav className="flex flex-col gap-1 bg-white rounded-2xl border border-border p-3 shadow-card sticky top-24">
            {navItems.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                  currentPath === to
                    ? "text-white"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
                style={
                  currentPath === to
                    ? { backgroundColor: "oklch(var(--navy))" }
                    : {}
                }
                data-ocid={`sidebar.${label.toLowerCase().replace(" ", "_")}.link`}
              >
                <Icon size={16} />
                {label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-border">
              <button
                type="button"
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
                data-ocid="sidebar.logout.button"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}

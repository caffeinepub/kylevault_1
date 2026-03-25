import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { Link, useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, Loader2, Shield } from "lucide-react";
import { useState } from "react";

export function Signup() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    if (form.password.length < 6)
      errs.password = "Password must be at least 6 characters.";
    if (form.password !== form.confirm)
      errs.confirm = "Passwords do not match.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      login(form.email, form.name);
      navigate({ to: "/dashboard" });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl border border-border shadow-card p-8 space-y-6 animate-fade-in">
          <div className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "oklch(var(--navy))" }}
              >
                <Shield size={24} className="text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              Open Your Account
            </h1>
            <p className="text-sm text-muted-foreground">
              Start your savings journey with MTVault
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={form.name}
                onChange={set("name")}
                data-ocid="signup.name.input"
              />
              {errors.name && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="signup.name_error"
                >
                  {errors.name}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="signup-email">Email address</Label>
              <Input
                id="signup-email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={set("email")}
                data-ocid="signup.input"
              />
              {errors.email && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="signup.email_error"
                >
                  {errors.email}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="signup-password">Password</Label>
              <div className="relative">
                <Input
                  id="signup-password"
                  type={showPw ? "text" : "password"}
                  placeholder="Min. 6 characters"
                  value={form.password}
                  onChange={set("password")}
                  className="pr-10"
                  data-ocid="signup.password.input"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="signup.password_error"
                >
                  {errors.password}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="confirm">Confirm Password</Label>
              <Input
                id="confirm"
                type="password"
                placeholder="Repeat password"
                value={form.confirm}
                onChange={set("confirm")}
                data-ocid="signup.confirm.input"
              />
              {errors.confirm && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="signup.confirm_error"
                >
                  {errors.confirm}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full rounded-full font-semibold text-white"
              style={{ backgroundColor: "oklch(var(--navy))" }}
              disabled={loading}
              data-ocid="signup.submit_button"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin mr-2" /> Creating
                  account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold hover:underline"
              style={{ color: "oklch(var(--navy))" }}
              data-ocid="signup.login.link"
            >
              Sign In
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

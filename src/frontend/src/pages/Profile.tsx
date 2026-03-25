import { AppShell } from "@/components/AppShell";
import { DemoModal } from "@/components/DemoModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { Check, Copy, Globe } from "lucide-react";
import { useState } from "react";

export function Profile() {
  const { user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const displayName = user?.name ?? "Kyle Johnson";
  const displayEmail = user?.email ?? "kyle.johnson@kylevault.com";
  const slug = displayName.toLowerCase().replace(/\s+/g, "");
  const profileUrl = `${slug}.kylevault.com`;
  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleCopy = () => {
    navigator.clipboard.writeText(profileUrl).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AppShell>
      <div className="space-y-5 animate-fade-in pb-16 max-w-2xl">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Profile</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Manage your account information.
          </p>
        </div>

        {/* Profile header card */}
        <div
          className="rounded-2xl p-6 flex items-center gap-5"
          style={{ backgroundColor: "oklch(var(--navy))" }}
          data-ocid="profile.card"
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center shrink-0 text-2xl font-bold text-white"
            style={{ backgroundColor: "oklch(var(--primary))" }}
          >
            {initials}
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white">{displayName}</h2>
            <p className="text-sm text-white/60">{displayEmail}</p>
            <p className="text-xs text-white/50">Member since January 2024</p>
          </div>
        </div>

        {/* Edit form */}
        <div className="bg-white rounded-2xl border border-border shadow-card p-6 space-y-5">
          <h3 className="font-bold text-foreground">Account Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Full Name</Label>
              <Input
                value={displayName}
                readOnly
                className="bg-muted/40"
                data-ocid="profile.name.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Email Address</Label>
              <Input
                value={displayEmail}
                readOnly
                className="bg-muted/40"
                data-ocid="profile.email.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Currency</Label>
              <Input value="USD ($)" readOnly className="bg-muted/40" />
            </div>
            <div className="space-y-1.5">
              <Label>Account Type</Label>
              <Input
                value="Personal Savings"
                readOnly
                className="bg-muted/40"
              />
            </div>
          </div>

          {/* Profile URL */}
          <div className="space-y-1.5">
            <Label className="flex items-center gap-1.5">
              <Globe size={13} /> Your Savings Link
            </Label>
            <div className="flex gap-2">
              <Input
                value={profileUrl}
                readOnly
                className="bg-accent/60 font-mono text-sm"
                data-ocid="profile.url.input"
              />
              <Button
                variant="outline"
                size="sm"
                className="shrink-0"
                onClick={handleCopy}
                data-ocid="profile.copy.button"
              >
                {copied ? (
                  <Check size={14} className="text-green-600" />
                ) : (
                  <Copy size={14} />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Mock subdomain for demo — UI only.
            </p>
          </div>

          <Button
            variant="outline"
            onClick={() => setModalOpen(true)}
            data-ocid="profile.edit.button"
          >
            Edit Profile
          </Button>
        </div>

        {/* Account stats */}
        <div
          className="bg-white rounded-2xl border border-border shadow-card p-6"
          data-ocid="profile.stats.card"
        >
          <h3 className="font-bold text-foreground mb-4">Account Stats</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-muted/40 rounded-xl border border-border p-4 text-center">
              <p
                className="text-3xl font-extrabold"
                style={{ color: "oklch(var(--navy))" }}
              >
                47
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Total Transactions
              </p>
            </div>
            <div className="bg-muted/40 rounded-xl border border-border p-4 text-center">
              <p
                className="text-3xl font-extrabold"
                style={{ color: "oklch(var(--primary))" }}
              >
                68%
              </p>
              <p className="text-xs text-muted-foreground mt-1">Savings Rate</p>
            </div>
            <div className="bg-muted/40 rounded-xl border border-border p-4 text-center">
              <p
                className="text-3xl font-extrabold"
                style={{ color: "oklch(var(--success))" }}
              >
                3
              </p>
              <p className="text-xs text-muted-foreground mt-1">Plans Used</p>
            </div>
            <div className="bg-muted/40 rounded-xl border border-border p-4 text-center">
              <p className="text-3xl font-extrabold text-foreground">Jan</p>
              <p className="text-xs text-muted-foreground mt-1">Joined 2024</p>
            </div>
          </div>
        </div>
      </div>

      <DemoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Edit Profile"
        message="Profile editing is not functional in this demo. In a live version, you could update your name, email, profile picture, and notification preferences."
      />
    </AppShell>
  );
}

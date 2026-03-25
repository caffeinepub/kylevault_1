export function DisclaimerBanner() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 py-2 px-4 text-center"
      style={{
        backgroundColor: "oklch(var(--navy) / 0.95)",
        backdropFilter: "blur(8px)",
      }}
    >
      <p className="text-xs text-white/80">
        <span className="font-semibold text-white">Demo only:</span> KyleVault
        is a concept demo and does not hold or manage real funds.
      </p>
    </div>
  );
}

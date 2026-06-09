export default function UrgencyBanner() {
  return (
    <div className="bg-tertiary-container text-on-tertiary-container py-2 px-8 flex justify-between items-center z-[60] relative">
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-headline flex items-center gap-2">
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-tertiary-container opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-on-tertiary-container"></span>
        </span>
        Emergency 24/7 Response Available Nationwide
      </span>
      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider">
        <span>Call Now: 1855-VIPORT1 / 1855-8476781</span>
      </div>
    </div>
  );
}

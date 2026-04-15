export function SectionLabel({ label }) {
  return (
    <div className="mb-3">
      <span className="text-xs uppercase tracking-[2.5px] text-brand-accent font-semibold">
        {label}
      </span>
    </div>
  );
}

export function SectionTitle({ children }) {
  return (
    <h2 className="text-[40px] font-extrabold text-slate-100 mb-12 tracking-[-1px] leading-[1.15]">
      {children}
    </h2>
  );
}

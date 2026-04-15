export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-brand-border text-center">
      <span className="text-[13px] text-slate-600">
        {"\u00A9"} {new Date().getFullYear()} Josh Griffith. Built with purpose.
      </span>
    </footer>
  );
}

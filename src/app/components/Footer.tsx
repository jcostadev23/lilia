const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70 backdrop-blur-xl py-10 mt-32">
      <div className="max-w-6xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg text-white">Lilia Makeup</p>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Glow Beyond
          </p>
        </div>
        <p className="text-sm text-white/60">
          Made by <span className="font-semibold text-white">Jcostadev23</span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;

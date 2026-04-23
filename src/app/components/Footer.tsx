import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/6 bg-black/50 backdrop-blur-2xl mt-32">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(236,72,153,0.5), transparent)" }} />
      <div className="max-w-[1280px] mx-auto px-8 pt-16 pb-10">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-display text-xl text-white mb-1">Lilia Makeup</p>
            <p className="text-[10px] uppercase tracking-[0.45em] text-pink-400/70 mb-4">Glow Beyond</p>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Arte, elegância e transformação. Cada pincelada é uma afirmação de beleza única.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-4">Navegação</p>
            <div className="flex flex-col gap-2">
              <a href="/" className="text-sm text-white/50 hover:text-white transition-colors duration-200">Início</a>
              <a href="/users/works" className="text-sm text-white/50 hover:text-white transition-colors duration-200">Portfólio</a>
              <a href="/users" className="text-sm text-white/50 hover:text-white transition-colors duration-200">Sobre</a>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-4">Contacto</p>
            <div className="flex gap-4 mb-4">
              <a href="https://www.facebook.com/liliadionisio.93" className="text-white/40 hover:text-blue-400 text-xl transition-all duration-200 hover:scale-110">
                <FaFacebook />
              </a>
              <a href="https://instagram.com/lilia_dionisio25?igshid=ZDc4ODBmNjlmNQ==" className="text-white/40 hover:text-pink-400 text-xl transition-all duration-200 hover:scale-110">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@liliapatrici4.93?_t=8dMPTqgMikN&_r=1" className="text-white/40 hover:text-white text-xl transition-all duration-200 hover:scale-110">
                <FaTiktok />
              </a>
              <a href="https://wa.me/351924486733?text=Para Fazer Marcação" className="text-white/40 hover:text-emerald-400 text-xl transition-all duration-200 hover:scale-110">
                <FaWhatsapp />
              </a>
            </div>
            <a
              href="https://wa.me/351924486733?text=Para Fazer Marcação"
              className="inline-block text-[11px] uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-pink-500/40 text-pink-400/80 hover:text-pink-300 hover:border-pink-500/70 hover:bg-pink-500/10 transition-all duration-300"
            >
              Fazer Marcação
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">© 2024 Lilia Makeup. Todos os direitos reservados.</p>
          <p className="text-xs text-white/25">
            Made by <span className="text-white/50">Jcostadev23</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

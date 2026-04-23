import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-2xl">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pink-500/60 to-transparent" />
      <div className="max-w-[1280px] px-8 py-[18px] mx-auto flex items-center justify-between gap-8">

        <a href="/" className="flex items-center gap-3 shrink-0">
          <Image
            className="rounded-full border border-pink-500/30 shadow-[0_0_24px_rgba(236,72,153,0.4)]"
            src="/images/logo.jpg"
            alt="logo"
            height={40}
            width={40}
          />
          <div>
            <p className="font-display text-sm text-white tracking-widest uppercase">Lilia Makeup</p>
            <p className="text-[9px] uppercase tracking-[0.45em] text-pink-400/60">Artistry Studio</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-[11px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors duration-300">
            Início
          </a>
          <a href="/users/works" className="text-[11px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors duration-300">
            Portfólio
          </a>
          <a href="/users" className="text-[11px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors duration-300">
            Sobre
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-row gap-4 text-white/55 text-lg">
            <a className="hover:text-blue-400 hover:scale-110 transition-all duration-200" href="https://www.facebook.com/liliadionisio.93">
              <FaFacebook />
            </a>
            <a className="hover:text-pink-400 hover:scale-110 transition-all duration-200" href="https://instagram.com/lilia_dionisio25?igshid=ZDc4ODBmNjlmNQ==">
              <FaInstagram />
            </a>
            <a className="hover:text-white hover:scale-110 transition-all duration-200" href="https://www.tiktok.com/@liliapatrici4.93?_t=8dMPTqgMikN&_r=1">
              <FaTiktok />
            </a>
            <a className="hover:text-emerald-400 hover:scale-110 transition-all duration-200" href="https://wa.me/351924486733?text=Para Fazer Marcação">
              <FaWhatsapp />
            </a>
          </div>
          <a
            href="https://wa.me/351924486733?text=Para Fazer Marcação"
            className="hidden md:block text-[11px] uppercase tracking-[0.2em] px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-semibold hover:shadow-[0_4px_24px_rgba(236,72,153,0.55)] hover:scale-[1.03] transition-all duration-300"
          >
            Reservar
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl relative after:content-[''] after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-gradient-to-r after:from-pink-500/0 after:via-pink-500/60 after:to-cyan-400/0"
    >
      <div className="max-w-6xl px-8 py-6 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 text-white">
          <a href="/" className="flex items-center gap-4">
            <Image
              className="rounded-full border border-white/20 shadow-[0_0_30px_rgba(236,72,153,0.35)]"
              src="/images/logo.jpg"
              alt="logo"
              height={56}
              width={56}
            />
          </a>
          <div>
            <p className="font-display text-lg text-white">Lilia Makeup</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 text-white text-3xl lg:text-4xl">
          <a
            className="transition hover:text-cyan-300"
            href="https://www.facebook.com/liliadionisio.93"
          >
            <FaFacebook />
          </a>
          <a
            className="transition hover:text-pink-300"
            href="https://instagram.com/lilia_dionisio25?igshid=ZDc4ODBmNjlmNQ=="
          >
            <FaInstagram />
          </a>
          <a
            className="transition hover:text-slate-200"
            href="https://www.tiktok.com/@liliapatrici4.93?_t=8dMPTqgMikN&_r=1"
          >
            <FaTiktok />
          </a>
          <a
            className="transition hover:text-emerald-300"
            href="https://wa.me/351924486733? text= Para Fazer Marcaçao "
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

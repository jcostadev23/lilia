import MainCard from "./card/main-card";
import ProfilePicture from "./Profilepic";
import MainSections from "./sections/main-sections";

const MainPage = () => {
  return (
    <main className="relative overflow-hidden">
      <div className="orb orb--pink w-[700px] h-[700px]" style={{ top: "-200px", left: "-200px" }} />
      <div className="orb orb--cyan w-[500px] h-[500px]" style={{ top: "100px", right: "-200px", animationDelay: "-6s" }} />
      <div className="orb orb--purple w-[400px] h-[400px]" style={{ bottom: "0", left: "40%" }} />

      {/* Hero */}
      <section className="relative max-w-[1280px] mx-auto px-8 pt-[90px] pb-[100px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.5em] text-pink-400 mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-pink-500/60 inline-block" />
            Atelier Lilia Makeup
          </p>
          <h1 className="font-display leading-[1.06] mb-8" style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}>
            <span className="block text-white">Redefinindo</span>
            <span className="block text-gradient">Beleza</span>
            <span className="block text-white">com Arte</span>
          </h1>
          <p className="text-slate-300/80 text-lg leading-relaxed max-w-lg mb-10">
            LiliaMakup não é apenas um acessório de beleza — é uma afirmação.
            Cada pincelada amplifica sua essência e transforma o cotidiano
            em um ritual radiante.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/users/works"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold tracking-wide shadow-[0_8px_30px_rgba(236,72,153,0.45)] hover:shadow-[0_8px_50px_rgba(236,72,153,0.7)] hover:scale-[1.03] transition-all duration-300"
            >
              Ver Portfólio
            </a>
            <a
              href="/users"
              className="px-8 py-3 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-pink-400/50 transition-all duration-300"
            >
              Sobre a Artista
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-[32px] blur-[70px] scale-110"
            style={{ background: "radial-gradient(ellipse at center, rgba(236,72,153,0.22) 0%, rgba(139,92,246,0.12) 50%, rgba(56,189,248,0.1) 100%)" }}
          />
          <ProfilePicture src="/images/lilia/main.jpg" alt="Lilia Dionísio" priority />
        </div>
      </section>

      {/* Stats bar */}
      <div className="border-y border-white/6 dot-grid" style={{ background: "rgba(255,255,255,0.015)" }}>
        <div className="max-w-[1280px] mx-auto px-8 py-8 grid grid-cols-3 divide-x divide-white/8">
          {([
            { value: "500+", label: "Clientes" },
            { value: "5 Anos", label: "De Experiência" },
            { value: "100%", label: "Satisfação" },
          ] as const).map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 px-4">
              <span className="font-display text-2xl text-white">{s.value}</span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-white/35">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content sections */}
      <MainCard className="py-[80px]">
        <div className="flex items-center justify-center">
          <ProfilePicture
            src="/images/background_pic/my_background.jpg"
            alt="perfumes e pincéis espalhados"
          />
        </div>
        <MainSections>
          <h2 className="font-display text-2xl text-white">
            Essência desvelada em cada pincelada luminosa.
          </h2>
          <p className="text-slate-300/80 mt-6 leading-relaxed">
            Em um universo de cores e aromas, a beleza se revela com sutileza.
            O toque preciso do pincel realça a autenticidade, enquanto o perfume
            dança no ar como uma assinatura invisível. Cada detalhe é um convite
            para viver a beleza como experiência sensorial.
          </p>
        </MainSections>
      </MainCard>

      <MainCard className="pb-[80px]">
        <MainSections className="order-2 lg:order-1">
          <h2 className="font-display text-2xl text-white">
            Paleta de cores que transforma movimento em emoção.
          </h2>
          <p className="text-slate-300/80 mt-6 leading-relaxed">
            Tons suaves e vibrantes se encontram para inspirar a sua criatividade.
            Cada cor conta uma história, cada brilho é uma extensão da sua voz.
            Aqui, a maquiagem vira linguagem e a expressão ganha intensidade.
          </p>
        </MainSections>
        <div className="flex items-center justify-center order-1 lg:order-2">
          <ProfilePicture
            src="/images/background_pic/colorPalete.jpg"
            alt="paleta de cores"
          />
        </div>
      </MainCard>

      <MainCard className="pb-[100px]">
        <div className="flex items-center justify-center">
          <ProfilePicture
            src="/images/background_pic/lapisBatton.jpg"
            alt="lapis e battons"
          />
        </div>
        <MainSections>
          <h2 className="font-display text-2xl text-white">
            Traços de elegância com energia de neon.
          </h2>
          <p className="text-slate-300/80 mt-6 leading-relaxed">
            Cada detalhe reflete confiança e personalidade. Dos olhos contornados
            com precisão aos lábios marcados por tons vibrantes, a sua beleza
            se torna uma obra-prima em constante evolução.
          </p>
        </MainSections>
      </MainCard>
    </main>
  );
};

export default MainPage;

import MainCard from "./card/main-card";
import ProfilePicture from "./Profilepic";
import MainSections from "./sections/main-sections";

const MainPage = () => {
  return (
    <main className="relative overflow-hidden">
      <div className="orb orb--pink w-[420px] h-[420px] -top-32 -left-24" />
      <div className="orb orb--cyan w-[380px] h-[380px] top-24 -right-20" />
      <div className="max-w-6xl mx-auto px-8 pt-24 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <MainSections className="glass-panel neon-border rounded-3xl p-12 text-left">
          <p className="text-xs uppercase tracking-[0.4em] text-pink-300/80">
            Atelier Lilia Makup
          </p>
          <h1 className="font-display text-2xl sm:text-2xl lg:text-4xl text-white mt-6 text-glow">
            Redefinindo beleza com luz, textura e atitude futurista.
          </h1>
          <p className="text-base sm:text-lg text-slate-200 mt-6 leading-relaxed">
            LiliaMakup não é apenas um acessório de beleza; é uma afirmação.
            Experimente a sensação luxuosa de um design pensado para ampliar
            sua essência e transformar o cotidiano em um ritual radiante.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold tracking-wide shadow-[0_18px_40px_rgba(236,72,153,0.35)] hover:scale-[1.02] transition"
              href={`/users/works`}
            >
              Ver portfólio
            </a>
            <a
              className="px-6 py-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/60 transition"
              href={`/users`}
            >
              Sobre a artista
            </a>
          </div>
        </MainSections>
        <div className="flex items-center justify-center">
          <ProfilePicture
            src={"/images/lilia/main.jpg"}
            alt={"Lilia Dionisio"}
            priority
          />
        </div>
      </div>

      <MainCard className="pb-24">
        <div className="flex items-center justify-center">
          <ProfilePicture
            src={"/images/background_pic/my_background.jpg"}
            alt={"perfumes e pinces espalhados"}
          />
        </div>
        <MainSections>
          <h2 className="font-display text-2xl text-white">
            Essência desvelada em cada pincelada luminosa.
          </h2>
          <p className="text-slate-200 mt-6 leading-relaxed">
            Em um universo de cores e aromas, a beleza se revela com sutileza.
            O toque preciso do pincel realça a autenticidade, enquanto o perfume
            dança no ar como uma assinatura invisível. Cada detalhe é um convite
            para viver a beleza como experiência sensorial.
          </p>
        </MainSections>
      </MainCard>

      <MainCard className="pb-24">
        <MainSections className="order-2 lg:order-1">
          <h2 className="font-display text-2xl text-white">
            Paleta de cores que transforma movimento em emoção.
          </h2>
          <p className="text-slate-200 mt-6 leading-relaxed">
            Tons suaves e vibrantes se encontram para inspirar a sua criatividade.
            Cada cor conta uma história, cada brilho é uma extensão da sua voz.
            Aqui, a maquiagem vira linguagem e a expressão ganha intensidade.
          </p>
        </MainSections>
        <div className="flex items-center justify-center order-1 lg:order-2">
          <ProfilePicture
            src={"/images/background_pic/colorPalete.jpg"}
            alt={"perfumes e pinces espalhados"}
          />
        </div>
      </MainCard>

      <MainCard className="pb-28">
        <div className="flex items-center justify-center">
          <ProfilePicture
            src={"/images/background_pic/lapisBatton.jpg"}
            alt={"lapis e battons"}
          />
        </div>
        <MainSections>
          <h2 className="font-display text-2xl text-white">
            Traços de elegância com energia de neon.
          </h2>
          <p className="text-slate-200 mt-6 leading-relaxed">
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

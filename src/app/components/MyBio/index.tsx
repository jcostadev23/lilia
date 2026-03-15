import BioCard from "./bio-card";
import ProfilePicture from "../Profilepic";

const MyBio = () => {
  return (
    <>
      <BioCard backgroundImage="/images/background_pic/pexel.jpg">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="flex justify-center">
            <ProfilePicture
              src="/images/lilia/personal1.jpg"
              alt="personal picture"
            />
          </div>
          <section className="text-left">
            <h2 className="font-display text-3xl text-white">
              Brilho Veranil: Maquiagem Simples e Original para Fins de Semana
              Radiantes
            </h2>
            <p className="text-base sm:text-lg text-slate-100/90 mt-6 leading-relaxed">
              Liberte sua beleza com uma maquiagem simples, mas incrivelmente
              original. Cores vibrantes e sutis brilham sob o sol do verão,
              realçando sua luminosidade natural. Desperte a vivacidade do fim
              de semana com uma maquiagem que captura a essência do verão em
              cada detalhe. 💫🌞
            </p>
          </section>
        </div>
      </BioCard>
      <BioCard backgroundImage="/images/background_pic/blashPink.jpg">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <section className="text-left order-2 lg:order-1">
            <h1 className="font-display text-3xl text-white">
              Redefinindo Beleza: Descubra o Poder da Maquiagem em Nosso Mundo
              de Cores e Estilo
            </h1>
            <p className="text-base sm:text-lg text-slate-100/90 mt-6 leading-relaxed">
              <strong className="font-semibold">LiliaMakup</strong> não é apenas
              um acessório de beleza; é uma afirmação. Delicie-se com a sensação
              luxuosa de seu design cuidadosamente elaborado, enquanto ele
              complementa a sua beleza natural e adiciona um toque de elegância
              à sua vida cotidiana.
            </p>
          </section>
          <div className="flex justify-center order-1 lg:order-2">
            <ProfilePicture
              src={"/images/lilia/wekend.jpg"}
              alt={"Lilia Dionisio"}
            />
          </div>
        </div>
      </BioCard>
      <BioCard backgroundImage="/images/background_pic/lapisBatton.jpg">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="flex justify-center">
            <ProfilePicture
              src="/images/lilia/happy.jpg"
              alt="personal picture"
            />
          </div>
          <section className="text-left">
            <h2 className="font-display text-3xl text-white">
              Brilho Veranil: Maquiagem Simples e Original para Fins de Semana
              Radiantes
            </h2>
            <p className="text-base sm:text-lg text-slate-100/90 mt-6 leading-relaxed">
              Liberte sua beleza com uma maquiagem simples, mas incrivelmente
              original. Cores vibrantes e sutis brilham sob o sol do verão,
              realçando sua luminosidade natural. Desperte a vivacidade do fim
              de semana com uma maquiagem que captura a essência do verão em
              cada detalhe. 💫🌞
            </p>
          </section>
        </div>
      </BioCard>
      <BioCard backgroundImage="/images/background_pic/section_bg.jpg">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <section className="text-left order-2 lg:order-1">
            <h1 className="font-display text-3xl text-white">
              Redefinindo Beleza: Descubra o Poder da Maquiagem em Nosso Mundo
              de Cores e Estilo
            </h1>
            <p className="text-base sm:text-lg text-slate-100/90 mt-6 leading-relaxed">
              <strong className="font-semibold">LiliaMakup</strong> não é apenas
              um acessório de beleza; é uma afirmação. Delicie-se com a sensação
              luxuosa de seu design cuidadosamente elaborado, enquanto ele
              complementa a sua beleza natural e adiciona um toque de elegância
              à sua vida cotidiana.
            </p>
          </section>
          <div className="flex justify-center order-1 lg:order-2">
            <ProfilePicture
              src={"/images/lilia/olhos.jpg"}
              alt={"Lilia Dionisio"}
            />
          </div>
        </div>
      </BioCard>
      <div className="flex justify-center mt-20">
        <a
          className="px-6 py-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/60 transition"
          href={"/"}
        >
          Pagina Inicial{" "}
        </a>
      </div>
    </>
  );
};

export default MyBio;

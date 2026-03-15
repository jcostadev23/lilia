import ProfilePicture from "../Profilepic";
import MainSections from "../sections/main-sections";

const MyCard = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <MainSections className="glass-panel neon-border">
        <h1 className="font-display text-4xl text-white">
          Redefinindo Beleza: Descubra o Poder da Maquiagem em Nosso Mundo de
          Cores e Estilo
        </h1>
        <p className="text-base sm:text-lg text-slate-200 mt-6 leading-relaxed">
          <strong className="font-semibold">LiliaMakup</strong> não é apenas um
          acessório de beleza; é uma afirmação. Delicie-se com a sensação
          luxuosa de seu design cuidadosamente elaborado, enquanto ele
          complementa a sua beleza natural e adiciona um toque de elegância à
          sua vida cotidiana.
        </p>
      </MainSections>
      <div className="flex justify-center">
        <ProfilePicture src={"/images/lilia/main.jpg"} alt={"Lilia Dionisio"} />
      </div>
    </div>
  );
};
export default MyCard;

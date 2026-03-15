import Description from "@/app/components/Description";
import Image from "next/image";
import SpecialCard from "../../components/SpecialCard";
import allData from "../../storage/allData";

export default function SelectedWork({ params }) {
  const selectedId = allData.find((item) => item.id == params.main);

  return (
    <>
      <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
        {selectedId?.image2.map((item) => (
          <SpecialCard key={item}>
            <img
              className="object-contain w-full aspect-[1/1] rounded-2xl border border-white/10 bg-slate-950/40 shadow-[0_24px_50px_rgba(15,23,42,0.6)]"
              src={item}
              alt="personal picture"
            />
            <Description description={selectedId.description} />
          </SpecialCard>
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-8 pb-16">
        <a
          className="inline-flex px-6 py-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/60 transition"
          href={`/users/works`}
        >
          Meus Trabalhos, {"\u2192"}
        </a>
      </div>
    </>
  );
}

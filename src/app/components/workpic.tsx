import Image from "next/image";
import allData from "../storage/allData";

const WorkPicture = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-8 py-[80px]">

      {/* Page header */}
      <div className="text-center mb-[60px]">
        <p className="text-[11px] uppercase tracking-[0.5em] text-pink-400 mb-4 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-pink-500/60 inline-block" />
          Galeria
          <span className="w-8 h-px bg-pink-500/60 inline-block" />
        </p>
        <h1 className="font-display text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Portfólio
        </h1>
        <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
          Cada look conta uma história de transformação, arte e expressão singular.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allData.map((data) => (
          <a key={data.id} href={`/users/${data.id}`} className="group block">
            <div className="relative overflow-hidden rounded-2xl neon-border bg-slate-950">

              {/* Cover image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  src={data.image1}
                  alt={`${data.name} makeup`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Cinematic gradient */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,3,15,1) 0%, rgba(3,3,15,0.3) 40%, transparent 70%)" }} />
              </div>

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-display text-lg text-white">{data.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-pink-400/80 mt-1">
                      Look #{String(data.id).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 text-sm group-hover:border-pink-500/70 group-hover:text-pink-400 group-hover:bg-pink-500/15 transition-all duration-300">
                    →
                  </div>
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(to right, #ec4899, #d946ef, #22d3ee)" }} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default WorkPicture;

import allData from "../storage/allData";
import Details from "./Details";

const WorkPicture = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-[1fr]">
        {allData.map((data) => (
          <a key={data.id} href={`/users/${data.id}`} className="h-full">
            <div className="glass-card neon-border rounded-3xl p-6 md:p-8 h-full flex flex-col transition duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_35px_80px_rgba(15,23,42,0.6)]">
              <div className="relative">
                <img
                  className="object-contain w-full aspect-[1/1] rounded-2xl border border-white/10 bg-slate-950/40 shadow-[0_24px_50px_rgba(15,23,42,0.6)]"
                  src={data.image1}
                  alt="personal picture"
                />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                    Neon Look
                  </span>
                  <span className="text-xs font-semibold text-pink-300">
                    #{data.id}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <Details details={data.details} />
                <div className="mt-6 flex items-center justify-between text-xs text-white/60 uppercase tracking-[0.25em]">
                  <span>View</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default WorkPicture;

type Props = {
  children: any;
  backgroundImage?: string;
};
const NeonCard: React.FC<Props> = ({ children, backgroundImage }) => {
  return (
    <div
      className="glass-card neon-border rounded-3xl p-6 md:p-10 relative overflow-hidden group transition duration-500 hover:-translate-y-1 h-full flex flex-col"
      style={{
        ...(backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}),
      }}
    >
      <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/40 transition"></div>
      <div className="relative rounded-2xl p-6 z-10">{children}</div>
    </div>
  );
};

export default NeonCard;

type Props = {
  children: React.ReactNode;
  backgroundImage?: string;
};

const NeonCard: React.FC<Props> = ({ children, backgroundImage }) => {
  return (
    <div
      className="glass-card neon-border rounded-3xl p-8 md:p-12 relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {backgroundImage && (
        <div className="absolute inset-0 transition-all duration-700" style={{ background: "linear-gradient(135deg, rgba(3,3,15,0.88) 0%, rgba(3,3,15,0.65) 50%, rgba(3,3,15,0.88) 100%)" }} />
      )}
      {backgroundImage && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: "linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(139,92,246,0.05) 50%, rgba(56,189,248,0.06) 100%)" }} />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default NeonCard;

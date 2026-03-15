import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

const ProfilePicture: React.FC<Props> = ({ src, alt }) => {
  return (
    <Image
      className="w-full h-auto aspect-[1/1] object-contain rounded-3xl border border-white/10 bg-slate-950/40 shadow-[0_30px_80px_rgba(15,23,42,0.55)] transition duration-500 hover:scale-[1.02]"
      src={src}
      height={640}
      width={640}
      style={{
        maxWidth: "100%",
        maxHeight: "auto",
      }}
      alt={alt}
      priority={true}
    />
  );
};
export default ProfilePicture;

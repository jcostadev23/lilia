import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  priority?: boolean;
}

const ProfilePicture: React.FC<Props> = ({ src, alt, priority = false }) => {
  return (
    <Image
      className="w-full h-auto aspect-[1/1] object-contain rounded-3xl border border-white/10 bg-slate-950/40 shadow-[0_30px_80px_rgba(15,23,42,0.55)] transition duration-500 hover:scale-[1.02]"
      src={src}
      height={640}
      width={640}
      style={{ maxWidth: "100%" }}
      alt={alt}
      priority={priority}
    />
  );
};
export default ProfilePicture;

import Image from "next/image";

const ProfilePicture = () => {
  return (
    <Image
      className="rounded shadow-lg"
      src="/images/lilia/main.jpg"
      height={550}
      width={300}
      style={{
        maxWidth: "100%",
        maxHeight: "auto",
      }}
      alt="Lilia Dionisio"
      priority={true}
    />
  );
};
export default ProfilePicture;

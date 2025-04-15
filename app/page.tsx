import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/images/background/bg-2.webp"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

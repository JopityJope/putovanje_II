"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomeButtonBlack() {
  const router = useRouter();

  const navigateHome = () => {
    router.push("/");
  };

  return (
    <button
      onClick={navigateHome}
      className="w-14 h-14 rounded-full z-20 cursor-pointer flex items-center justify-center absolute top-265 left-225"
      aria-label="Home"
    >
      <Image
        src="/images/icons/home-01.png"
        alt="Home"
        width={50}
        height={50}
      />
    </button>
  );
}

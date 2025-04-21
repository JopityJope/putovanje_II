"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomeButton() {
  const router = useRouter();

  const navigateHome = () => {
    router.push("/");
  };

  return (
    <button
      onClick={navigateHome}
      className="w-12 h-12 bg-(--crna) rounded-full z-20 cursor-pointer flex items-center justify-center"
    >
      <Image src="/images/icons/home.png" alt="Home" width={19} height={19} />
    </button>
  );
}

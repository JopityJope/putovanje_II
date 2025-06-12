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
      className="w-14 h-14 bg-(--crna) rounded-full z-20 cursor-pointer flex items-center justify-center"
    >
      <Image src="/images/icons/home.png" alt="Home" width={25} height={25} />
    </button>
  );
}

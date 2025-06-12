"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CreditsButton() {
  const router = useRouter();

  const navigateHome = () => {
    router.push("/credits");
  };

  return (
    <button
      onClick={navigateHome}
      className="w-20 h-20 rounded-full z-20 cursor-pointer flex items-center justify-center absolute top-260 left-228"
      aria-label="Home"
    >
      <Image
        src="/images/icons/feather.svg"
        alt="Credits"
        width={45}
        height={45}
      />
    </button>
  );
}

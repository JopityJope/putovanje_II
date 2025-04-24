import Footer from "../../components/Footer";
import Image from "next/image";
import { chapter1 } from "@/app/data/sr/chapter-1";

function page() {
  return (
    <main className="relative flex flex-col min-h-screen bg-background overflow-hidden bg-[url('/images/background/bg-5.png')] bg-no-repeat bg-cover opacity-90">
      <div className="absolute top-0 left-0 w-full h-screen z-10">
        {/*  <Image
          src="/images/line/chapters-1-1.png"
          alt="Overlay photo"
          fill
          priority
          className="object-cover"
        /> */}
      </div>
      <div className="z-20 text-black max-w-100 m-50">
        <p>{chapter1.pages[1].text}</p>
        <Image
          src="/images/chapter-1/01.jpg"
          alt="Overlay photo"
          width={400}
          height={400}
          priority
          className="object-cover"
        />
      </div>
      <Footer />
    </main>
  );
}

export default page;

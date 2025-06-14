// import Image from "next/image";

import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-center text-2xl font-bold leading-[1.1] sm:text-left sm:text-[4rem]">
          Hola Mundo
        </h1>
        <h1 className={` ${titleFont.className} font-bold`}>Hola Mundo</h1>
        <h1 className={` ${titleFont.className} `}>Hola Mundo</h1>
      </main>
    </div>
  );
}

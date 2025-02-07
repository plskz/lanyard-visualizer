import { GitHubIcon } from "@/components/icons/github";
import Input from "@/components/ui/input";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-7">
      <Spotlight
        className="left-0 top-20 md:-top-20 md:left-60"
        fill="#ffffff70"
      />

      <div className="flex w-10/12 flex-col items-center justify-center space-y-5 text-center md:size-96">
        <Image
          src="/lanyard-logo.png"
          alt="lanyard logo"
          width={96}
          height={96}
          draggable={false}
        />

        <h1 className="text-5xl font-bold md:text-7xl">
          <span className="block">Lanyard</span>
          <span className="block bg-linear-to-r from-neutral-100 via-slate-400 to-neutral-400 bg-[200%_auto] bg-clip-text leading-tight text-transparent">
            Visualizer
          </span>
        </h1>

        <p className="text-slate-300">
          A proof-of-concept example to show what you can build with Lanyard
          API.
        </p>

        <Input />
      </div>

      <GitHubIcon />
    </main>
  );
}

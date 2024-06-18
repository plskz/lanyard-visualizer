"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-screen place-items-center">
      <div className="flex w-11/12 max-w-[611px] flex-col items-center gap-5 text-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          {error.message}
        </h1>
        <p className="text-xs text-white/50 md:text-base">
          Make sure you entered a valid Discord user ID and make sure the user
          is in{" "}
          <Link
            href="https://lanyard.rest/discord"
            className="underline-dashed underline-white/20 underline"
            target="_blank"
          >
            Lanyard&apos;s Discord server
          </Link>
          . Reload the page after you join the Discord server or try with an
          user ID who is already in Discord.
        </p>
        <Link
          className="w-28 rounded-lg bg-gray-500/5 px-4 py-2 text-center text-xs text-white/60 hover:bg-gray-500/20 hover:text-white/90 md:w-32 md:text-sm"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}

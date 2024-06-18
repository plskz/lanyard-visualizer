"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Input() {
  const router = useRouter();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const discordId = e.currentTarget.discordId.value;
    router.push(`/profile/${discordId}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative flex w-full justify-center text-white/20 md:w-4/5"
    >
      <input
        type="text"
        name="discordId"
        className="w-full appearance-none rounded-lg border-[1.5px] border-white/10 bg-transparent py-2 pl-3 pr-20 text-white placeholder-white/20 outline-none transition-all hover:border-white/20 focus:border-white/30"
        placeholder="Enter your Discord user ID"
      />

      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
        <button
          type="submit"
          className="select-none text-xs font-medium uppercase transition-colors hover:text-white/40"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

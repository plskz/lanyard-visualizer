import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="flex flex-col items-center gap-5">
        <p className="text-4xl font-bold text-white md:text-6xl">
          Page not found
        </p>
        <Link
          className="w-32 rounded-lg bg-gray-500/5 px-4 py-2 text-center text-sm text-white/60 hover:bg-gray-500/20 hover:text-white/90"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

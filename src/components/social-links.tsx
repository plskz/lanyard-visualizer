import { ConnectedAccount } from "@/utils/types";
import Link from "next/link";

export default async function SocialLinks({
  socials,
}: {
  socials: ConnectedAccount[];
}) {
  if (!socials) return null;

  return (
    <div className="flex flex-wrap gap-x-1">
      {socials.map(({ type, id, name, href }) => (
        <p
          key={id}
          className="mt-4 cursor-pointer rounded-full border border-white/[0.2] px-2 py-0.5 text-sm font-light text-white"
        >
          <Link href={href}>{type === "domain" ? name : type}</Link>
        </p>
      ))}
    </div>
  );
}

import Activities from "@/components/activities";
import Details from "@/components/details";
import SocialLinks from "@/components/social-links";
import { Icon } from "@/components/ui/evervault-card";
import { getBio, getSocials } from "@/utils/lanyard";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const socials = await getSocials(params.id);
  const bio = await getBio(params.id);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5">
      <div className="relative flex w-4/5 max-w-sm flex-col items-start border border-white/[0.2] p-4">
        <Icon className="absolute -left-3 -top-3 size-6" />
        <Icon className="absolute -bottom-3 -left-3 size-6" />
        <Icon className="absolute -right-3 -top-3 size-6" />
        <Icon className="absolute -bottom-3 -right-3 size-6" />

        <div className="flex size-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-hide">
          <div className="size-full shrink-0 snap-center">
            <Details userID={params.id} bio={bio} />
            <SocialLinks socials={socials} />
          </div>
          <div className="w-full shrink-0 snap-center">
            <Activities userID={params.id} />
          </div>
        </div>
      </div>

      <Link
        className="w-32 rounded-lg bg-gray-500/5 px-4 py-2 text-center text-sm text-white/60 hover:bg-gray-500/20 hover:text-white/90"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}

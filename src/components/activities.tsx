"use client";

import { getActivity } from "@/utils/activity";
import { appAsset } from "@/utils/discord-cdn";
import Image from "next/image";
import { useLanyardWS } from "use-lanyard";
import { ActivitiesSkeleton } from "./skeletons";
import Timestamps from "./timestamps";
import Link from "next/link";

export default function Activities({ userID }: { userID: any }) {
  const data = useLanyardWS(userID);

  if (!data) return <ActivitiesSkeleton />;
  if (JSON.stringify(data) === "{}") throw new Error("User not found");

  const { activities } = data;

  // don't show custom status
  const filteredActivities = activities.filter(
    (activity) => activity.type !== 4,
  );

  // No activities
  if (!filteredActivities.length) {
    return (
      <div className="flex size-full flex-col items-center justify-center text-xs md:text-sm">
        <h1>I&apos;m not currently doing anything!</h1>
      </div>
    );
  }

  return (
    <div className="flex size-full flex-col items-center justify-center text-xs md:text-sm">
      <div className="w-full space-y-3">
        {filteredActivities.map((activity) => {
          const { name, id, details, state, timestamps, type } = activity;

          const largeImage = appAsset(activity);

          // Listening to Spotify
          if (name === "Spotify") {
            const { song, artist, album_art_url, track_id } = data.spotify!;

            return (
              <div key={id} className="flex space-x-2">
                <Image
                  src={album_art_url || "/default-appAsset.png"}
                  alt="album art"
                  width={96}
                  height={96}
                  className="size-24 rounded-md object-cover"
                />

                <div className="w-full">
                  <p className="mb-2 font-bold">{getActivity(activity)}</p>
                  <Link
                    href={`https://open.spotify.com/track/${track_id}`}
                    className="hover:underline"
                    target="_blank"
                  >
                    <p className="line-clamp-1">{song}</p>
                  </Link>
                  <p className="line-clamp-1">by {artist}</p>

                  <Timestamps timestamps={timestamps} type={type} />
                </div>
              </div>
            );
          }

          return (
            <div key={id} className="flex space-x-2">
              <Image
                src={largeImage}
                alt="app icon"
                width={96}
                height={96}
                className="size-24 rounded-md object-cover"
              />

              <div className="size-full">
                <p className="mb-2 font-bold">{getActivity(activity)}</p>

                <p>{details}</p>
                <p>{state}</p>

                <Timestamps timestamps={timestamps} type={type} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

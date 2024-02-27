'use client'

import { getActivity } from '@/utils/activity'
import { appAsset } from '@/utils/discord-cdn'
import Image from 'next/image'
import { useLanyardWS } from 'use-lanyard'
import { ActivitiesSkeleton } from './skeletons'

export default function Activities({ userID }: { userID: any }) {
  const data = useLanyardWS(userID)

  if (!data) return <ActivitiesSkeleton />
  if (JSON.stringify(data) === '{}') throw new Error('User not found')

  const { activities } = data

  // No activities
  if (!activities.length) {
    return (
      <div className='flex flex-col items-center justify-center text-xs size-full md:text-sm'>
        <h1>I&apos;m not currently doing anything!</h1>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center justify-center text-xs --bg-green-500 size-full md:text-sm'>
      <div className='w-full space-y-3 --bg-yellow-900'>
        {activities.map((activity) => {
          const { name, id } = activity
          const largeImage = appAsset(activity)

          // Listening to Spotify
          if (name === 'Spotify') {
            const { song, artist, album_art_url } = data.spotify!

            return (
              <div key={id} className='flex --bg-red-500 space-x-2'>
                <Image
                  src={album_art_url || '/default-appAsset.png'}
                  alt='album art'
                  width={96}
                  height={96}
                  className='rounded-md size-[96px] object-cover'
                />

                <div className='w-full --bg-emerald-600'>
                  <p className='mb-2 font-bold'>{getActivity(activity)}</p>
                  <p>{song}</p>
                  <p>by {artist}</p>
                </div>
              </div>
            )
          }

          return (
            <div key={id} className='flex --bg-blue-800 space-x-2'>
              <Image
                src={largeImage}
                alt='app icon'
                width={96}
                height={96}
                className='rounded-md size-[96px] object-cover'
              />

              <div className='--bg-pink-600 size-full'>
                <p className='mb-2 font-bold'>{getActivity(activity)}</p>
                <p>{name}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

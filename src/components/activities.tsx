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

  // don't show custom status
  const filteredActivities = activities.filter((activity) => activity.type !== 4)

  // No activities
  if (!filteredActivities.length ) {
    return (
      <div className='flex flex-col items-center justify-center text-xs size-full md:text-sm'>
        <h1>I&apos;m not currently doing anything!</h1>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center justify-center text-xs size-full md:text-sm'>
      <div className='w-full space-y-3'>
        {filteredActivities.map((activity) => {
          const { name, id, details, state } = activity
          const largeImage = appAsset(activity)

          // Listening to Spotify
          if (name === 'Spotify') {
            const { song, artist, album_art_url } = data.spotify!

            return (
              <div key={id} className='flex space-x-2'>
                <Image
                  src={album_art_url || '/default-appAsset.png'}
                  alt='album art'
                  width={96}
                  height={96}
                  className='rounded-md size-[96px] object-cover'
                />

                <div className='w-full'>
                  <p className='mb-2 font-bold'>{getActivity(activity)}</p>
                  <p>{song}</p>
                  <p>by {artist}</p>
                </div>
              </div>
            )
          }

          return (
            <div key={id} className='flex space-x-2'>
              <Image
                src={largeImage}
                alt='app icon'
                width={96}
                height={96}
                className='rounded-md size-[96px] object-cover'
              />

              <div className='size-full'>
                <p className='mb-2 font-bold'>{getActivity(activity)}</p>
                
                <p>{details}</p>
                <p>{state}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

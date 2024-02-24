'use client'

import { avatarUri } from '@/utils/discord-cdn'
import { useLanyardWS } from 'use-lanyard'
import { EvervaultCard } from './ui/evervault-card'
import { DetailsSkeleton } from './skeletons'

export default function Details({ userID }: { userID: any }) {
  const data = useLanyardWS(userID)

  if (!data) return <DetailsSkeleton />
  if (JSON.stringify(data) === '{}') throw new Error('User not found')

  const { id, avatar, global_name, username } = data.discord_user
  const userAvatar = avatarUri(id, avatar!)

  return (
    <>
      <EvervaultCard userAvatar={userAvatar} />
      <h1 className='mt-3 text-4xl font-bold'>{global_name || username}</h1>
      <h2 className='mt-4 text-sm font-light'>
        ex aute incididunt ex tempor in dolor occaecat consectetur Lorem laboris
        in
      </h2>
    </>
  )
}

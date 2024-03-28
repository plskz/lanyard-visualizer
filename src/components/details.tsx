'use client'

import { avatarUri } from '@/utils/discord-cdn'
import { toHTML } from 'discord-markdown'
import { useLanyardWS } from 'use-lanyard'
import { DetailsSkeleton } from './skeletons'
import { EvervaultCard } from './ui/evervault-card'

export default function Details({ userID }: { userID: any }) {
  const data = useLanyardWS(userID)

  if (!data) return <DetailsSkeleton />
  if (JSON.stringify(data) === '{}') throw new Error('User not found')

  const { id, avatar, global_name, username } = data.discord_user
  const userAvatar = avatarUri(id, avatar!)

  return (
    <>
      <EvervaultCard userAvatar={userAvatar} status={data.discord_status} />
      <h1 className='mt-3 text-4xl font-bold'>{global_name || username}</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
}

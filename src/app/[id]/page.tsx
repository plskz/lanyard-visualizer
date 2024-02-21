import ErrorPage from '@/components/error-page'
import { getData } from '@/utils/lanyard'
import { LanyardAPI } from '@/utils/types'
import Image from 'next/image'

export default async function Page({ params }: { params: { id: string } }) {
  const data = (await getData(params.id)) as LanyardAPI

  if (!data.success) return <ErrorPage />

  const {
    data: { discord_user },
  } = data

  const userAvatar = `https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.png?size=256`

  return (
    <div className='min-h-screen place-items-center grid'>
      <Image
      className='rounded-full'
        src={userAvatar}
        alt={`${discord_user.display_name}'s discord profile`}
        width={128}
        height={128}
        draggable={false}
      />
    </div>
  )
}

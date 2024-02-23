import ErrorPage from '@/components/error-page'
import SocialLinks from '@/components/social-links'
import { EvervaultCard, Icon } from '@/components/ui/evervault-card'

import { avatarUri } from '@/utils/discord-cdn'
import { editSocials, getLanyard_dcdn } from '@/utils/lanyard'
import { Profile } from '@/utils/types'

export default async function Page({ params }: { params: { id: string } }) {
  const data: Profile = await getLanyard_dcdn(params.id)

  if (!data.user) return <ErrorPage />

  const { id, avatar, global_name, username } = data.user

  const socials = editSocials(data.connected_accounts)
  const userAvatar = avatarUri(id, avatar)

  return (
    <div className='min-h-screen place-items-center grid'>
      <div className='border border-white/[0.2] flex flex-col items-start w-4/5 max-w-sm p-4 relative'>
        <Icon className='absolute size-6 -top-3 -left-3' />
        <Icon className='absolute size-6 -bottom-3 -left-3' />
        <Icon className='absolute size-6 -top-3 -right-3' />
        <Icon className='absolute size-6 -bottom-3 -right-3' />

        <EvervaultCard userAvatar={userAvatar} />

        <h1 className='mt-3 text-4xl font-bold'>{global_name || username}</h1>
        <h2 className='mt-4 text-sm font-light'>
          ex aute incididunt ex tempor in dolor occaecat consectetur Lorem
          laboris in
        </h2>

        <SocialLinks socials={socials} />
      </div>
    </div>
  )
}

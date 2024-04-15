import Activities from '@/components/activities'
import Details from '@/components/details'
import SocialLinks from '@/components/social-links'
import { Icon } from '@/components/ui/evervault-card'
import { getBio, getSocials } from '@/utils/lanyard'
import Link from 'next/link'

export default async function Page({ params }: { params: { id: string } }) {
  const socials = await getSocials(params.id)
  const bio = await getBio(params.id)

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-5'>
      <div className='border border-white/[0.2] flex flex-col items-start w-4/5 max-w-sm p-4 relative'>
        <Icon className='size-6 -top-3 -left-3 absolute' />
        <Icon className='size-6 -bottom-3 -left-3 absolute' />
        <Icon className='size-6 -top-3 -right-3 absolute' />
        <Icon className='size-6 -bottom-3 -right-3 absolute' />

        <div className='snap-x snap-mandatory size-full flex overflow-x-scroll overflow-y-hidden'>
          <div className='size-full shrink-0 snap-center'>
            <Details userID={params.id} bio={bio} />
            <SocialLinks socials={socials} />
          </div>
          <div className='shrink-0 snap-center w-full'>
            <Activities userID={params.id} />
          </div>
        </div>
      </div>

      <Link
        className='bg-gray-500/5 hover:bg-gray-500/20 hover:text-white/90 text-white/60 w-32 px-4 py-2 text-sm text-center rounded-lg'
        href='/'
      >
        Return Home
      </Link>
    </div>
  )
}

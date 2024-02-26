import Activities from '@/components/activities'
import Details from '@/components/details'
import SocialLinks from '@/components/social-links'
import { Icon } from '@/components/ui/evervault-card'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className='min-h-screen place-items-center grid'>
      <div className='border border-white/[0.2] flex flex-col items-start w-4/5 max-w-sm p-4 relative'>
        <Icon className='absolute size-6 -top-3 -left-3' />
        <Icon className='absolute size-6 -bottom-3 -left-3' />
        <Icon className='absolute size-6 -top-3 -right-3' />
        <Icon className='absolute size-6 -bottom-3 -right-3' />

        <div className='flex overflow-x-scroll snap-x snap-mandatory -bg-red-500 size-full'>
          <div className='size-full shrink-0 snap-center'>
            <Details userID={params.id} />
            <SocialLinks userID={params.id} />
          </div>
          <div className='w-full shrink-0 snap-center'>
            <Activities userID={params.id} />
          </div>
        </div>
      </div>
    </div>
  )
}

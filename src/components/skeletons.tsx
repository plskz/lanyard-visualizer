import { EvervaultCard } from './ui/evervault-card'

export function DetailsSkeleton() {
  return (
    <>
      <EvervaultCard userAvatar='/default-avatar.png' status='offline' />
      <h1 className='mt-3 text-4xl font-bold opacity-25'>Loading...</h1>
    </>
  )
}

export function ActivitiesSkeleton() {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <p className='text-2xl'>Loading...</p>
    </div>
  )
}

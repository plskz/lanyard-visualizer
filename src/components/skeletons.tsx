import { EvervaultCard } from './ui/evervault-card'

export function DetailsSkeleton() {
  return (
    <>
      <EvervaultCard userAvatar='/default-avatar.png' status='offline' />
      <h1 className='mt-3 text-4xl font-bold opacity-25'>Loading...</h1>
      <h2 className='mt-4 text-sm font-light opacity-25'>
        ex aute incididunt ex tempor in dolor occaecat consectetur Lorem laboris
        in
      </h2>
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

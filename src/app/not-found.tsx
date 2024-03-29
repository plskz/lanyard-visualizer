import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='min-h-screen grid place-items-center'>
      <div className='flex flex-col items-center gap-5'>
        <p className='text-4xl font-bold text-white md:text-6xl'>
          Page not found
        </p>
        <Link
          className='w-32 px-4 py-2 text-sm text-center rounded-lg bg-gray-500/5 hover:bg-gray-500/20 hover:text-white/90 text-white/60'
          href='/'
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

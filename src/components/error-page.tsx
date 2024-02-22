import Link from 'next/link'

export default function ErrorPage() {
  return (
    <main className='place-items-center grid min-h-screen'>
      <div className='flex flex-col items-center gap-5 w-11/12 max-w-[611px] text-center'>
        <h1 className='text-5xl font-bold text-white'>User not found</h1>
        <p className='text-white/50'>
          Make sure you entered a valid Discord user ID and make sure the user
          is in{' '}
          <Link
            href='https://lanyard.rest/discord'
            className='underline-dashed underline-white/20 underline'
            target='_blank'
          >
            Lanyard&apos;s Discord server
          </Link>
          . Reload the page after you join the Discord server or try with an
          user ID who is already in Discord.
        </p>
        <Link
          className='bg-gray-500/5 hover:bg-gray-500/20 hover:text-white/90 text-white/60 w-32 px-4 py-2 text-sm text-center rounded-lg'
          href='/'
        >
          Return Home
        </Link>
      </div>
    </main>
  )
}

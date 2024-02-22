import Link from 'next/link'

export default function ErrorPage() {
  return (
    <main className='min-h-screen place-items-center grid'>
      <div className='flex flex-col items-center gap-5 w-11/12 max-w-[611px] text-center'>
        <h1 className='text-4xl font-bold text-white md:text-6xl'>
          User not found
        </h1>
        <p className='text-xs text-white/50 md:text-base'>
          Make sure you entered a valid Discord user ID and make sure the user
          is in{' '}
          <Link
            href='https://lanyard.rest/discord'
            className='underline underline-dashed underline-white/20'
            target='_blank'
          >
            Lanyard&apos;s Discord server
          </Link>
          . Reload the page after you join the Discord server or try with an
          user ID who is already in Discord.
        </p>
        <Link
          className='px-4 py-2 text-xs text-center rounded-lg w-28 md:w-32 md:text-sm bg-gray-500/5 hover:bg-gray-500/20 hover:text-white/90 text-white/60'
          href='/'
        >
          Return Home
        </Link>
      </div>
    </main>
  )
}

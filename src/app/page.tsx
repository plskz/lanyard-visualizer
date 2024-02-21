import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen grid place-items-center'>
      <div className='flex flex-col items-center justify-center text-center space-y-5 h-96 w-96'>
        <Image
          src='/lanyard-logo.png'
          alt='lanyard logo'
          width={96}
          height={96}
        />

        <h1 className='text-5xl font-bold text-transparent text-white md:text-7xl'>
          <span className='block'>Lanyard</span>
          <span className='block bg-gradient-to-r bg-[200%_auto] bg-clip-text leading-tight text-transparent from-neutral-100 via-slate-400 to-neutral-400'>
            Visualizer
          </span>
        </h1>

        <p className='text-slate-300'>
          A proof-of-concept example to show what you can build with Lanyard
          API.
        </p>

        <div className='relative flex justify-center w-full md:w-4/5 text-white/20'>
          <input
            className='appearance-none pl-3 pr-20 text-white placeholder-white/20 w-full bg-transparent outline-none py-2 border-[1.5px] border-white/10 hover:border-white/20 focus:border-white/30 transition-all rounded-lg'
            placeholder='Enter your Discord user ID'
          />

          <div className='absolute inset-y-0 right-0 flex items-center pr-4'>
            <button
              type='button'
              className='text-xs font-medium uppercase select-none transition-colors hover:text-white/40'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

import { GitHubIcon } from '@/components/icons/github'
import Input from '@/components/ui/input'
import { Spotlight } from '@/components/ui/spotlight'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen gap-7'>
      <Spotlight
        className='top-20 left-0 md:left-60 md:-top-20'
        fill='#ffffff70'
      />

      <div className='flex flex-col items-center justify-center w-10/12 text-center space-y-5 md:size-96 -bg-blue-300 -bg-red-700'>
        <Image
          src='/lanyard-logo.png'
          alt='lanyard logo'
          width={96}
          height={96}
          draggable={false}
        />

        <h1 className='text-5xl font-bold md:text-7xl'>
          <span className='block'>Lanyard</span>
          <span className='block bg-gradient-to-r bg-[200%_auto] bg-clip-text leading-tight text-transparent from-neutral-100 via-slate-400 to-neutral-400'>
            Visualizer
          </span>
        </h1>

        <p className='text-slate-300'>
          A proof-of-concept example to show what you can build with Lanyard
          API.
        </p>

        <Input />
      </div>

      <GitHubIcon />
    </main>
  )
}

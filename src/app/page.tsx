import Input from '@/components/ui/input'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='grid min-h-screen place-items-center'>
      <div className='flex flex-col items-center justify-center space-y-5 text-center h-96 w-96'>
        <Image
          src='/lanyard-logo.png'
          alt='lanyard logo'
          width={96}
          height={96}
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
    </main>
  )
}

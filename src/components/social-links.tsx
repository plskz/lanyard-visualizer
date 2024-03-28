import { ConnectedAccount } from '@/utils/types'
import Link from 'next/link'

export default async function SocialLinks({ socials }: { socials: ConnectedAccount[] }) {
  if (!socials) return null

  return (
    <div className='flex flex-wrap gap-x-1'>
      {socials.map(({ type, id, name, href }) => (
        <p
          key={id}
          className='text-sm border font-light border-white/[0.2] cursor-pointer rounded-full mt-4 text-white px-2 py-0.5 animate-shine transition-colors bg-[linear-gradient(110deg,#000103,45%,#7877C640,55%,#000103)] bg-[length:200%_100%]'
        >
          <Link href={href}>{type === 'domain' ? name : type}</Link>
        </p>
      ))}
    </div>
  )
}

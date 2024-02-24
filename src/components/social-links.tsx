import { getSocials } from '@/utils/lanyard'
import Link from 'next/link'

export default async function SocialLinks({ userID }: { userID: string }) {
  const socials = await getSocials(userID)

  if (!socials) return null

  return (
    <div className='flex flex-wrap gap-x-1'>
      {socials.map(({ type, id, name, href }) => (
        <p
          key={id}
          className='text-sm border font-light border-white/[0.2] cursor-pointer rounded-full mt-4 text-white px-2 py-0.5'
        >
          <Link href={href}>{type === 'domain' ? name : type}</Link>
        </p>
      ))}
    </div>
  )
}

'use client'

import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

export default function Input() {
  const router = useRouter()

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const discordId = e.currentTarget.discordId.value
    router.push(`/profile/${discordId}`)
  }

  return (
    <form
      onSubmit={onSubmit}
      className='relative flex justify-center w-full md:w-4/5 text-white/20'
    >
      <input
        type='text'
        name='discordId'
        className='appearance-none pl-3 pr-20 text-white placeholder-white/20 w-full bg-transparent outline-none py-2 border-[1.5px] border-white/10 hover:border-white/20 focus:border-white/30 transition-all rounded-lg'
        placeholder='Enter your Discord user ID'
      />

      <div className='absolute inset-y-0 right-0 flex items-center pr-4'>
        <button
          type='submit'
          className='text-xs font-medium uppercase select-none transition-colors hover:text-white/40'
        >
          Submit
        </button>
      </div>
    </form>
  )
}

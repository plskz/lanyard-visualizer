'use client'

import { cn } from '@/utils/cn'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const EvervaultCard = ({
  userAvatar,
  className,
}: {
  userAvatar: string
  className?: string
}) => {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  const [randomString, setRandomString] = useState('')

  useEffect(() => {
    let str = generateRandomString(1500)
    setRandomString(str)
  }, [])

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)

    const str = generateRandomString(1500)
    setRandomString(str)
  }

  return (
    <div
      className={cn(
        'p-0.5 bg-transparent aspect-square flex items-center justify-center size-full relative',
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className='relative flex items-center justify-center overflow-hidden bg-transparent size-full group/card rounded-3xl'
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className='relative z-10 flex items-center justify-center'>
          <div className='relative flex items-center justify-center text-4xl font-bold text-white rounded-full size-44'>
            <div className='absolute size-full bg-black/[0.8] blur-sm rounded-full' />
            {/* <span className='absolute z-30 text-white'>Text</span> */}
            <Image
              className='z-20 rounded-full bg-opacity-25'
              src={userAvatar}
              alt='Discord Profile'
              width={256}
              height={256}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className='pointer-events-none'>
      <div className='absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50'></div>
      <motion.div
        className='absolute inset-0 opacity-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500'
        style={style}
      />
      <motion.div
        className='absolute inset-0 opacity-0 rounded-2xl mix-blend-overlay group-hover/card:opacity-100'
        style={style}
      >
        <p className='absolute inset-x-0 h-full font-mono text-xs font-bold text-white break-words whitespace-pre-wrap transition duration-500'>
          {randomString}
        </p>
      </motion.div>
    </div>
  )
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
export const generateRandomString = (length: number) => {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={className}
      {...rest}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  )
}

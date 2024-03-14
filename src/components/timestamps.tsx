import { useTime } from '@/app/hooks/useTime'
import { Timestamps } from 'use-lanyard'

export default function Timestamps({
  timestamps,
  type,
}: {
  timestamps?: Timestamps
  type: number
}) {
  const time = useTime(timestamps)

  if (!time) return null

  if (type === 2) {
    return (
      <div className='mt-2'>
        <div
          className='flex w-full h-1.5 rounded-full overflow-hidden bg-gray-700'
          role='progressbar'
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className='flex flex-col justify-center rounded-full overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-500 bg-blue-500'
            style={{ width: `${time?.completion}%` }}
          />
        </div>
        <div className='flex justify-between text-xs'>
          <p>{time.start}</p>
          <p>{time.end}</p>
        </div>
      </div>
    )
  }

  if (time.start && !time.end) return <p>{time.start} elapsed</p>
  if (time.end && !time.start) return <p>{time.end} left</p>

  return null
}

import { useTime } from '@/app/hooks/useTime'
import { Timestamps } from 'use-lanyard'

export default function Timestamps({ timestamps }: { timestamps?: Timestamps }) {
  const time = useTime(timestamps)

  if (time && time.start && !time.end) return <p>{time?.start} elapsed</p>
  if (time && time.end && !time.start) return <p>{time?.end} left</p>

  return null
}

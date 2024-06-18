import { useTime } from "@/app/hooks/useTime";
import type { Timestamps } from "use-lanyard";

export default function Timestamps({
  timestamps,
  type,
}: {
  timestamps?: Timestamps;
  type: number;
}) {
  const time = useTime(timestamps);

  if (!time) return null;

  if (type === 2) {
    return (
      <div className="mt-2">
        <div
          className="flex h-1.5 w-full overflow-hidden rounded-full bg-gray-700"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="flex flex-col justify-center overflow-hidden whitespace-nowrap rounded-full bg-blue-500 text-center text-xs text-white transition duration-500"
            style={{ width: `${time?.completion}%` }}
          />
        </div>
        <div className="flex justify-between text-xs">
          <p>{time.start}</p>
          <p>{time.end}</p>
        </div>
      </div>
    );
  }

  if (time.start && !time.end) return <p>{time.start} elapsed</p>;
  if (time.end && !time.start) return <p>{time.end} left</p>;

  return null;
}

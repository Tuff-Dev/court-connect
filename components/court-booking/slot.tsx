import { cn } from "@/lib/utils";
import { CourtBookingSlot } from "./availability-day";

type Props = {
  slot: CourtBookingSlot;
};

const hoursSinceStartOfDay = (date: Date) => {
  // Get the current time in milliseconds since January 1, 1970
  const timeInMillis = date.getTime();

  // Get the start of the day by setting the time to midnight (00:00:00)
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);

  // Get the time in milliseconds since the start of the day
  const timeSinceStartOfDay = timeInMillis - startOfDay.getTime();

  // Convert milliseconds to hours and multiply by 60
  const hoursAsNumber = (timeSinceStartOfDay / (1000 * 60 * 60)) * 60;

  return hoursAsNumber;
};

const height = (date1: Date, date2: Date) => {
  // Convert both dates to hour representations
  const hours1 = hoursSinceStartOfDay(date1);
  const hours2 = hoursSinceStartOfDay(date2);

  // Find the absolute difference in hour representations
  const hourDifference = Math.abs(hours1 - hours2);

  return hourDifference;
};

const formatTime = (date: Date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // Add leading zeros if needed
  const hoursString = hours < 10 ? "0" + hours : hours;
  const minutesString = minutes < 10 ? "0" + minutes : minutes;

  return hoursString + ":" + minutesString;
};

const Slot = ({ slot }: Props) => {
  const topOffset = `${hoursSinceStartOfDay(slot.startTime)}px`;

  const heightPx = `${height(slot.startTime, slot.endTime)}px`;

  const handleSlotClick = () => {
    console.log(slot);
  };

  return (
    <div
      onClick={handleSlotClick}
      className={cn(
        slot.available ? "bg-green-600" : "bg-red-500",
        "px-1 cursor-pointer absolute border rounded border-slate-300 w-[200px]",
      )}
      style={{ marginTop: topOffset, height: heightPx }}
    >
      {`${formatTime(slot.startTime)}`}
    </div>
  );
};

export default Slot;

import { ScrollArea } from "../ui/scroll-area";
import BackgroundGrid from "./background-grid";
import CourtAvailability from "./court-availability";

type Props = {
  date: Date | undefined;
};

export type CourtAvailability = {
  courtName: string;
  slots: CourtBookingSlot[];
};

export type CourtBookingSlot = {
  id: number;
  startTime: Date;
  endTime: Date;
  available: boolean;
};

export const dummyData: CourtAvailability[] = [
  {
    courtName: "Court 1",
    slots: [
      {
        id: 1,
        startTime: new Date(2024, 4, 9, 8, 0),
        endTime: new Date(2024, 4, 9, 8, 45),
        available: true,
      },
      {
        id: 2,
        startTime: new Date(2024, 4, 9, 8, 45),
        endTime: new Date(2024, 4, 9, 9, 30),
        available: true,
      },
      {
        id: 3,
        startTime: new Date(2024, 4, 9, 9, 30),
        endTime: new Date(2024, 4, 9, 10, 15),
        available: false,
      },
      {
        id: 9,
        startTime: new Date(2024, 4, 9, 12, 30),
        endTime: new Date(2024, 4, 9, 13, 30),
        available: true,
      },
    ],
  },
  {
    courtName: "Court 2",
    slots: [
      {
        id: 4,
        startTime: new Date(2024, 4, 9, 8, 0),
        endTime: new Date(2024, 4, 9, 8, 45),
        available: true,
      },
      {
        id: 5,
        startTime: new Date(2024, 4, 9, 8, 45),
        endTime: new Date(2024, 4, 9, 9, 30),
        available: true,
      },
      {
        id: 6,
        startTime: new Date(2024, 4, 9, 9, 30),
        endTime: new Date(2024, 4, 9, 10, 15),
        available: true,
      },
    ],
  },
];

const AvailabilityDay = (props: Props) => {
  return (
    <div className="w-full relative">
      <BackgroundGrid />

      <div className="flex space-x-2 absolute ml-20">
        {dummyData.map((court) => (
          <CourtAvailability key={court.courtName} courtAvailability={court} />
        ))}
      </div>
    </div>
  );
};

export default AvailabilityDay;

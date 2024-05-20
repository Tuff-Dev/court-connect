import React from "react";
import { CourtAvailability as CourtAvailabilityType } from "./availability-day";
import Slot from "./slot";

type Props = {
  courtAvailability: CourtAvailabilityType;
};

const CourtAvailability = ({ courtAvailability }: Props) => {
  return (
    <div className="select-none w-[200px]">
      <div className="text-lg sticky top-0 font-bold text-center h-[40px]  w-full">
        {courtAvailability.courtName}
      </div>
      <div className="w-[200px]">
        {courtAvailability.slots.map((slot) => {
          return <Slot key={slot.id} slot={slot} />;
        })}
      </div>
    </div>
  );
};

export default CourtAvailability;

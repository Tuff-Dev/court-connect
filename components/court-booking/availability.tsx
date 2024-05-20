"use client";

import { useState } from "react";
import CourtAvailabilityDay from "./availability-day";
import Selections from "./selections";
import { ScrollArea } from "../ui/scroll-area";

type Props = {};

const Availability = (props: Props) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="">
      <Selections date={date} setDate={setDate} />
      <div className="p-2 lg:p-4">
        <CourtAvailabilityDay date={date} />
      </div>
    </div>
  );
};

export default Availability;

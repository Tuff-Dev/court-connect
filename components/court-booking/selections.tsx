"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import DatePicker from "../date-picker";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { dummyData } from "./availability-day";

type Props = {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
};

const Selections = ({ date, setDate }: Props) => {
  const setToday = () => {
    setDate(new Date());
  };

  const courts = Array.from(new Set(dummyData.map((item) => item.courtName)));

  return (
    <div className="flex sticky top-0 gap-2 bg-primary-foreground flex-wrap p-2">
      <DatePicker date={date!} setDate={setDate} />

      <Button variant={"outline"} onClick={setToday} className="">
        Today
      </Button>
      {/* <Label htmlFor="selectCourt" className="h-full ">
          Select Court
        </Label> */}
      <Select value="all">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Court" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem key={"all"} value={"all"}>
            All Courts
          </SelectItem>
          {courts.map((court) => (
            <SelectItem key={court} value={court}>
              {court}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Selections;

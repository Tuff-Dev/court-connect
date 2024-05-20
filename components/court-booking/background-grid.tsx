const times: string[] = [
  "12 PM",
  "1 AM",
  "2 AM",
  "3 AM",
  "4 AM",
  "5 AM",
  "6 AM",
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 AM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
];

const BackgroundGrid = () => {
  return (
    <div className="absolute top-0 left-0 select-none pt-[40px] w-full">
      {times.map((time) => {
        return (
          <div key={time} className="h-[60px] border-t w-full">
            <span className="text-gray-600">{time}</span>
          </div>
        );
      })}
    </div>
  );
};

export default BackgroundGrid;

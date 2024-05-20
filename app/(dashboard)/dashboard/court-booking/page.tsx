import BreadCrumb from "@/components/breadcrumb";
import Availability from "@/components/court-booking/availability";
import Selections from "@/components/court-booking/selections";
import { Heading } from "@/components/ui/heading";

const breadcrumbItems = [
  { title: "Court Booking", link: "/dashboard/court-booking" },
];
export default function page() {
  return (
    <>
      <div className="flex flex-col space-y-4 p-2 md:p-4 pt-2 h-screen overflow-scroll">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading
            title={`Court Booking`}
            description="Make & manage your court bookings"
          />
        </div>
        <div className="">
          <Availability />
        </div>
      </div>
    </>
  );
}

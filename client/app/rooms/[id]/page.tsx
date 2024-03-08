import BookingDetails from "@/components/admin/BookingDetails";
import SingleRoomDisplay from "@/components/admin/SingleRoomDisplay";
import React from "react";

function page() {
  return (
    <div>
      <SingleRoomDisplay />
      <BookingDetails />
    </div>
  );
}

export default page;

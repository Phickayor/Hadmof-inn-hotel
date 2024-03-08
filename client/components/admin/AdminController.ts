import { serverUrl } from "@/config/server.config";

const CheckRoomAvailability = async (roomId: number) => {};
export const GetRooms = async () => {
  try {
    const res = await fetch(`${serverUrl}/rooms/`);
    const data = await res.json();
    return res.ok ? { success: true, ...data } : { success: false, ...data };
  } catch (error) {
    return {
      success: false,
      message: "An error occured. Try again"
    };
  }
};

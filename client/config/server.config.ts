export const serverUrl =
  process.env.NEXT_PUBLIC_ENVIROMENT == " "
    ? process.env.NEXT_PUBLIC_LIVE_URL
    : process.env.NEXT_PUBLIC_LOCAL_URL;

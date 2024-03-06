import { serverUrl } from "@/config/server.config";
export const handleLogin = async (email: string, password: string) => {
  try {
    const res = await fetch(`${serverUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    return res.ok
      ? { success: true, message: data.message, token: data.token }
      : { success: false, message: data.message };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Check your internet connection and try again"
    };
  }
};
export const handleRegister = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const res = await fetch(`${serverUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, password })
    });
    const data = await res.json();
    return res.ok
      ? { success: true, message: data.message, token: data.token }
      : { success: false, message: data.message };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Check your internet connection and try again"
    };
  }
};

export const getId = async (token: string) => {
  try {
    const res = await fetch(`${serverUrl}/auth/get-id`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    const data = await res.json();
    return res.ok
      ? { success: true, id: data.id }
      : { success: false, message: data.message };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Check your internet connection and try again"
    };
  }
};

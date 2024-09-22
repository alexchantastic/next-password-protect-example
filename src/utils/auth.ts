import { getIronSession, SessionOptions } from "iron-session";
import { cookies } from "next/headers";

export interface SessionData {
  isAuthenticated: boolean;
}

export const sessionOptions: SessionOptions = {
  password: process.env.IRON_SESSION_SECRET!,
  cookieName: "_auth",
  cookieOptions: {
    secure: process.env.NODE_ENV == "production",
  },
};

export async function getSession() {
  return await getIronSession<SessionData>(cookies(), sessionOptions);
}

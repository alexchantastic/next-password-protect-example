import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "password",
      credentials: {
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        if (credentials?.password == process.env.NEXTAUTH_PASSWORD) {
          return { id: "0" };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in"
  }
};
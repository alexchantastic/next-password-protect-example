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
        if (credentials?.password == "test") {
          return { id: "0" };
        } else {
          return null;
        }
      },
    }),
  ],
  secret: "thisisasecret",
  session: {
    strategy: "jwt",
  },
}
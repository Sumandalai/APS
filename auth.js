import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import authConfig from "./auth.config";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  
  callbacks: {
    async signIn({ user, account }) {
      return true; 
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.phone = token.phone;
      }
      return session;
    },
    async jwt({ token }) {
      // Fetch user data from the database based on the token's subject (user ID)
      if (!token.sub) return token;
      const user = await db.user.findUnique({ where: { id: token.sub } });
      if (!user) return token;

      // Assign necessary fields to the token
      token.name = user.name;
      token.email = user.email;
      token.phone = user.phone;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});


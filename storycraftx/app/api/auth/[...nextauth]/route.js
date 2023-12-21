import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Discord from "next-auth/providers/discord"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Discord({
      clientId: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET,
      callbackUrl: process.env.DISCORD_CALLBACK_URL,
    }),
  ],
};

export const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}
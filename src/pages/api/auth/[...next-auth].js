import NexAuth from "next-auth";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers:[
    GithubProvider({
        clientId:"Ov23lishDbfsqQoNhcye",
        clientSecret:"c28376e23c248021d5550eeeed2ab3d8308d0515"
    }),
  ],
};


export default NextAuth(authOptions);
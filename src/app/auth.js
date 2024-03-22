// import NextAuth from "next-auth"
// import { options } from "./api/auth/options"

// export const {auth,handlers:{GET,POST},signOut,signIn} = NextAuth(options)


import NextAuth from "next-auth"
import { options } from "./api/auth/options"

export const {auth,handlers:{GET,POST},signOut,signIn} = NextAuth(options)



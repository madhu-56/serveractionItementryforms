import { auth } from "./app/auth";

export default auth((req) => {
    // req.auth
    const isSingedIn = !!req.auth;
    console.log("Current Route : ",req.nextUrl.pathname)
  
    console.log("Sign In Status : ",isSingedIn)
})

  export const config = {
    // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
    matcher: ["/user/settings","/user/dashboard"],
  }

import Credentials from 'next-auth/providers/credentials'

export const options = {
    providers: [
        Credentials({
            name: "User Login",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const user = { id: 90, name: "student", password: "admin", role: "Admin",email:"admin@gmail.com" }
                if (credentials?.username == user.name && credentials?.password == user.password) {
                    return user;
                }
                return null;
            },

        }),

    ],
    // session:{
    //     strategy:'jwt'
    // },
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user)
            {

                token.role = user.role
                token.email=user.email
            }
            return token;
        },
        session: async ({ session, token }) => {
            if (session.user) {
                session.user.role = token.role;
                session.user.email = token.email;
            }
            return session;
        }
    },
    secret: process.env.AUTH_SECRET,
    pages:{
        signIn:"/login",
        signOut:"/logout"
    }
}


// userid/password ------> authorize --user-- > JWT | Session ----> client|server | api route (auth)
//                                          token{id,role,}                   


// import Credentials from 'next-auth/providers/credentials'

// export const options={
//     providers:[
//         Credentials({
//             name:"User Login",
//             credentials:{
//                 username: { label: "Username", type: "text", placeholder: "jsmith" },
//                 password: {  label: "Password", type: "password" }
//             },
//             async authorize(credentials,req) {
//                 const user = {id:90, name:"student", password:"admin"}
//                 if(credentials?.username == user.name && credentials?.password==user.password)
//                 {
//                     return user;
//                 }
//                 return null;
//             }
//         })
//     ],
//     secret:process.env.AUTH_SECRET,
// }
import { auth, signOut } from "@/app/auth"
import { redirect } from "next/navigation"

async function ProtectedPage() {
    const session = await auth()
    console.log(session)
    if(!session)
        // redirect("/api/auth/signin")
    redirect("/login")

  return (
    <div>This is protected Page 
        <p>


            Welcome {session.user.name}
            Role : {session.user.role}
        </p>
        {
            session.user.role=='Admin' && <div>
                protected for Admin
                </div>
        }

<form>

        <button formAction={async()=>{
            "use server"
            await signOut();
        }}>Logout</button>
</form>
    </div>
  )
}

export default ProtectedPage

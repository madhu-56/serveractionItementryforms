import { auth, signOut } from "@/app/auth"
import { redirect } from "next/navigation"

async function ProtectedPage() {
    const session = await auth()
    console.log(session)
    if(!session)
        redirect("/api/auth/signin")

  return (
    <div>This is protected Page 
        <p>
            Welcome {session.user.name}
        </p>

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

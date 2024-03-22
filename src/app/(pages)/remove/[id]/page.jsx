"use client"
import deleteItem from "@/app/actions/deleteItem"
import { useState } from "react"
function RemovePage({params}) {

  const [response, setResponse]=useState(false);
  const handleRemove=async()=>{
     const result= await deleteItem(params.id)
     console.log("response = ",result)
     setResponse(result.success)
  }
 console.log(params)
  return (
    <div>
        <form>
            <button formAction={handleRemove} className='bg-blue-300 px-3 py-1'>Sure to delete</button>
        </form>
        <div>
          {
            response && <p>Record deleted</p>

          }
          
        </div>
        
    </div>
    
  )
}

export default RemovePage


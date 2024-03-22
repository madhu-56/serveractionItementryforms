"use client"
import { useForm } from "react-hook-form"
import submitData from "../actions/registerform"
// import { ToastContainer,toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

 function registerform() {

       



  
  return (
    <div>
      <div className='w-full ml-44 mt-24'>
    <div className='h-[400px] w-[400px] p-10 bg-blue-400 border border-gray-300 rounded-xl'>
        <form action={submitData}>
            <fieldset className='w-full flex flex-col my-4'>
                <label className='text-white'>Username</label>
                <input type="text" name='username' className='border border-blue-400 rounded-lg px-2 py-1 outline-none'
                
                
                />
                
            </fieldset>
            <fieldset className='w-full flex flex-col my-4'>
                <label className='text-white'>Phone</label>
                <input type="number" name='phone' className='border border-blue-400 rounded-lg px-2 py-1 outline-none'
                
                />
            </fieldset>
            <fieldset className='w-full flex flex-col my-4'>
                <label className='text-white'>Email</label>
                <input type="text" name='email' className='border border-blue-400 rounded-lg px-2 py-1 outline-none'
                
                />
            </fieldset>
            <fieldset className='w-full flex flex-col my-4'>
                <label className='text-white'>Password</label>
                <input type="password" name='password' className='border border-blue-400 rounded-lg px-2 py-1 outline-none'
                
                />
            </fieldset>
            <fieldset className='w-full flex flex-col my-4'>
                 <button className='bg-orange-300 text-white px-10 py-1 rounded-lg'>register</button>

             </fieldset>
            

        </form>
       
        {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hidProgressBar={false}
        newstOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
   </div>
  
 </div>
 
    </div>
     
  )
 
}

export default registerform

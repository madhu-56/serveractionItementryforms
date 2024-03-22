"use client"
import {useForm} from "react-hook-form";
import { loginAction } from "@/app/actions/loginAction";
import Link from "next/link"

function loginpage() {
    const{
        handleSubmit,
        register,
        reset,
        formState:{errors},
    }=useForm();
    const onSubmit=(data)=>{
        console.log("Data:",data);
    }
    reset()

//    const handleSubmit=async(e)=>{
//     e.preventDefault();
//     await loginAction({username:"Test",password:"test123"})
//     console.log("handleSubmit")
//    }

  return (
    <div className='w-full flex justify-center items-center'>
        <div className='h-[350px] w-[350px] p-10 bg-gray-450 border border-gray-300 rounded-xl'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className='w-full flex flex-col my-4'>
                    <label>Username</label>
                    <input type="text" className='border border-blue-400 rounded-lg px-2 py-1 outline-none'
                    {...register("username",{required:true})}
                    />
                    {
                        errors.username?.type=='required' && <p className='text-red-500'>username required</p>
                    }
                </fieldset>
                <fieldset className='w-full flex flex-col my-4'>
                    <label>Password</label>
                    <input type="text" className='border border-blue-400 rounded-lg px-2 py-1 outline-none'
                    {...register("password",{required:true})}
                    />
                    {
                     errors.password?.type=='required' && <p className='text-red-500'>password required</p>   
                    }
                </fieldset>
                <fieldset className='w-full flex flex-col my-4'>
                    <button className='bg-orange-500 text-white px-10 py-1 rounded-lg'>Login</button>

                </fieldset>
                <div>
                    <p className='text-sm'>Not yet registered? then<Link href="./register">Register</Link></p>
                </div>

            </form>
        </div>
      
    </div>
  )
}

export default loginpage;

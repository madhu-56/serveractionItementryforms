
"use client"
import {useForm} from "react-hook-form"
import registerform from "@/app/actions/registerform";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
// import {IoEye} from "react-icons/io5";

   function registerpage() {
    const {register,handleSubmit,formState:{errors},reset} = useForm();
    const handleEntryForm = async (formData) =>{
      try{
        let status =await registerform(formData);

        if(status.success){
         toast.success('Registerd SuccessFully',{
          position:"top-right",
          autoClose:5000,
          hideProgressbar:false,
          closeOnClick:true,
          pauseOnHover:true,
          draggble:true,
          progress:undefined,
          them:"colored",
        });
      }else{
        toast.error('User alrady Exist',{
          position:"top-center",
          autoClose:5000,
          hideProgressBar:false,
          closeOnHover:true,
          draggable:true,
          progress:undefined,
          them:"colored",

        });
      }
      reset();
    } catch(error){
      console.error('Error processing registration:',error);
      toString.error('Oops!somthing went worng');
    }
    
    }
  
  return (
    
    <div className='w-full flex justify-center items-center '>
    <div className='h-[470px] w-[400px] p-10 bg-blue-400 border border-gray-300 rounded-xl'>
        <form action={handleSubmit(handleEntryForm)}>
            <fieldset className='w-full flex flex-col my-4'>
                <label className='text-white'>username</label>
                <input type="text" name='username' placeholder='Enter your name' className='border border-blue-400 text-sm rounded-lg px-2 py-1 outline-none'
                {...register("username",{required:true,minLength:3})}
                
                />
                {errors.username?.type === 'minLength' && (
                  <p className="text-red-500">User name should must be 3 character long</p>
                )

                }
            </fieldset>
            <fieldset className='w-full flex flex-col my-4'>
                <label className='text-white'>phone</label>
                <input type="number" name='phone' placeholder='Enter your phone number' className='border border-blue-400 text-sm rounded-lg px-2 py-1 outline-none'
                {...register("phone",{
                  required:'phone number is required',
                  minLength:{
                    value:10,
                    message:'phone number must be at least 10 nummber long',
                  },
                })}
                />
                {errors.phone&&(
                <p className="text-red-600">{errors.phone.message}</p>
                )}

            </fieldset>
            <fieldset className='w-full flex flex-col my-4'>
                <label className='text-white'>Email</label>
                <input type="text" name='email' placeholder='Enter Your email' className='border border-blue-400 text-sm rounded-lg px-2 py-1 outline-none'
                {...register("email",{
                  required:"email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address"
                  },

                }
                )}
                />
                {errors.email && (
                  <p className='text-red-600'>{errors.email.message}</p>
                )}
            </fieldset>
            <fieldset className='w-full flex flex-col my-4'>
                <label className='text-white'>password</label>
                <input type="password" name='password' placeholder='Enter password' className='border border-blue-400 text-sm rounded-lg px-2 py-1 outline-none'
                {...register("password",{
                  required:'password is required',
                  minLength:{
                    value:8,
                    message:'password must be at least 8 character long',
                  },
                  pattern:{
                    message:'password must contain at least one special character',
                  },
                }
                )}
                />
                {errors.password&&(
                <p className="text-red-600">{errors.password.message}</p>
                )}
            </fieldset>
            <fieldset className='w-full flex flex-col my-4'>
                 <button className='bg-orange-300 text-white px-10 py-1 rounded-lg'>register</button>

             </fieldset>
            

        </form>
        
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pasuseOnFocusLoss
        daraggble
        pauseOnHover
        them="colored"
        />
        
   </div>
  
 </div>

  )
}

export default registerpage

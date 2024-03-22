"use client"
import {useForm} from "react-hook-form";
import ItemEntry from '@/app/components/ItemEntryaction'
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SubmitButton from "./SubmitButton";

function ItemEntryForm() {
    const {register,handleSubmit,formState:{errors},reset,

     } = useForm();
     const handleEntryForm = async(formData)=>{
       let status = await ItemEntry(formData);
       if(status.success)
       {
        toast.success("Item Inserted");
       }else{
        toast.error("Ooops!! Something went worng");
       }
        reset();
            // console.log(formData);
     }
     
  return (
    <div className='max-w-xl mx-auto mt-20'>
      <form action={handleSubmit(handleEntryForm)}>
        <div className='flex flex-col gap-5 '>
            <div className='flex flex-col w-full'>
                <label>Enter Item Name</label>
                <input  className='outline-none border border-green-500 px-2 py-1 'type="text" name="itemName"
                {...register("itemName",{required:true})}
                />
                
                {
                    errors.itemName?.type=="required" && (
                        <p className='text-red-600'>item name Required</p>
                    ) 
                }
                
            </div>

        </div>
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col w-full'>
                <label>Enter Price</label>
                <input  className='outline-none border border-green-500 px-2 py-1 'type="number" name="price"
                {...register("price",{required:true})}

                />
                {
                    errors.price?.type== "required" && (
                        <p className='text-red-600'>price Required</p>
                    ) 
                }

            </div>
            
        </div>
        <div>
            <SubmitButton/>
        </div>
      </form>
      <ToastContainer
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
      />
    </div>
  )
}

export default ItemEntryForm

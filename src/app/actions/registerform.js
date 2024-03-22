"use server"
import DbConnection from '@/app/mongodb/models/DBConnection';
 import register from '@/app/mongodb/models/register'
import { redirect } from 'next/navigation';
 export default async function registerform(formData){
    try{
        await DbConnection();
        const existingUser = await register.findOne({username:formData.username});
        if(existingUser){
            return{success:false,message:'user already Exists'};
        }
        await register.create(formData);
        return{success:true,message:'Registratuin Successful'}
    }catch(error){
        return{success:false,message:'Registration failed'};
        
    }
   
 }
//  redirect('/login')
 


// "use server"
// import DbConnection from '@/app/mongodb/models/DBConnection';
// import register from '@/app/mongodb/models/register'
// import { redirect } from 'next/navigation';
// const submitData = async(formData)=>{
    
//     await DbConnection();
    
//     let username = formData.get("username");
//     let phone = formData.get("phone");
//     let email = formData.get("email");
//     let password = formData.get("password");
//     await register.create({username:username,phone:phone,email:email,password:password})
//     console.log(username,phone,email,password)
//     // redirect('/login')
//     // await register.create(formData)
// };
// export default submitData;

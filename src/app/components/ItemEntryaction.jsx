"use server"
import DBConnect from "../mongodb/models/DBConnection";
import Item from "../mongodb/models/item";
import {revalidatePath} from 'next/cache'
 export default async function ItemEntry(formData)

  {

    try{
      await DBConnect();
  await Item.create(formData);
  // console.log(formData);
  revalidatePath("/itementry");
  return {success:true};

    }catch(error)
    {
      return({success:false})
    }
  
}

 

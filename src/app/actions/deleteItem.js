"use server"

import { redirect } from "next/navigation";

import Dbconnect from "../mongodb/models/DBConnection"
import Item from "../mongodb/models/item"



export default async function deleteItem(itemId){
    await Dbconnect();
   
    try{
        await Item.findByIdAndDelete(itemId)
        
        return {success:true}
    }catch(error)
    {
        return {success:false}
    }
    
    
}
// redirect('/itementry')  

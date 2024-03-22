"use server"
import { redirect } from "next/navigation"
import Dbconnect from "../mongodb/models/DBConnection"
import Item from "../mongodb/models/item"

export default async function updateItem(itemId,formData){
    // console.log("Updating Item")

    let NewData={
        itemName:formData.newItem,
        price:formData.newPrice  
    }
//    console.log("New Data",NewData)
   await Dbconnect()
   await Item.findByIdAndUpdate(itemId,NewData);

redirect('/itementry')

}

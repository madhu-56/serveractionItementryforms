"use server"
import Item from '@/app/mongodb/models/item'
import DBConnection from '@/app/mongodb/models/DBConnection'
const submitItem = async(formData) =>{
    
    const itemName=formData.get("itemName")
    const price=formData.get("price")
    await DBConnection();
    
    let iteminfo = await Item.find({});
    console.log(iteminfo);
    await Item.create({itemName:itemName, price:price });
    // console.log({price,itemName});
}
export default submitItem;
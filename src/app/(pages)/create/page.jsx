import React from 'react'

import ItemForm from '@/app/components/ItemForm'

function Createpage() {
    // const submitItem = async(formData) =>{
    //     "use server"
    //     const itemName=formData.get("itemName")
    //     const price=formData.get("price")
    //     await DBConnection();
        
    //     let iteminfo = await Item.find({});
    //     console.log(iteminfo);
    //     // await Item.create({itemName:itemName, price:price });
    //     // console.log({price,itemName});
    // }
  return (
    <div className='max-w-xl mx-auto mt-20'>
      <ItemForm/>
    </div>
  )
}

export default Createpage

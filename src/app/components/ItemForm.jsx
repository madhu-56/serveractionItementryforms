"use client"
import updateItem from "@/app/actions/updateItem"

import {useState} from "react";
import UpdateButton from "./UpdateButton";

function ItemForm({item}) {
  const [itemName,setitemName] = useState(item.itemName);
  const [itemPrice,setItemPrice] = useState(item.price);

  const handleItemChange = (e) => {
    setitemName(e.target.value);
  };
  const handlePriceChange = (e) =>{
    setItemPrice(e.target.value);
  };
  const handleUpdate = async () =>{
    const formData = {newItem:itemName,newPrice:itemPrice};
    await updateItem(item._id,formData)
  };
  return (
    <>
      <form action={handleUpdate}>
        <div className='flex flex-col gap-5 '>
        <div className='flex flex-col w-full'>
            <label className='text-white font-bold'>Enter NewItem Name</label>
            <input value={itemName} onChange={handleItemChange} className='outline-none border border-green-500 px-2 py-1 'type="text" name="itemName"/>
        </div>
        <div className='flex flex-col w-full'>
            <label className='text-white font-bold'>Enter  Newprice</label>
            <input value={itemPrice} onChange={handlePriceChange} className='outline-none border border-green-500 px-2 py-1 ' type="text" name="price"/>
        </div>
        <div>
            {/* <button className='px-5 py-1 border border-red-500' type="submit">Save Item</button> */}
        </div>
        </div>
        <UpdateButton/>
       
      </form>
      
    </>
  )
}

export default ItemForm


// "use client"
// import submitItem from '@/app/actions/itemform'



// function ItemForm() {
//   return (
//     <>
//       <form action={submitItem}>
//         <div className='flex flex-col gap-5 '>
//         <div className='flex flex-col w-full'>
//             <label>Enter Item Name</label>
//             <input  className='outline-none border border-green-500 px-2 py-1 'type="text" name="itemName"/>
//         </div>
//         <div className='flex flex-col w-full'>
//             <label>Enter price</label>
//             <input className='outline-none border border-green-500 px-2 py-1 ' type="number" name="price"/>
//         </div>
//         <div>
//             <button className='px-5 py-1 border border-red-500' type="submit">Save Item</button>
//         </div>
//         </div>
       
//       </form>
      
//     </>
//   )
// }

// export default ItemForm

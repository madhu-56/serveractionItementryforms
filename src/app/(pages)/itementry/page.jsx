import ItemEntryForm from '@/app/components/ItemEntryForm'
import DBConnect from '@/app/mongodb/models/DBConnection'
import Item from '@/app/mongodb/models/item'
import Link from 'next/link';

async function itementrypage() {
  await DBConnect();
  let items = await Item.find({});
  return (
    <div>
    <ItemEntryForm/>
    <div className='max-w-xl mx-auto  mb-5'>
    {
      items.map((item,i)=>{
        return(<div className=' grid grid-cols-4  flex-row justify-between border border-red-500 mt-5 ' key={i}>
                <div className='px-2 py-2 w-full '>{item.itemName}</div>
                <div className='px-2 py-2  '>{item.price}</div>
                {/* <div className=' cursor-pointer px-2 py-2 w-full '>update</div>
                <div className=' cursor-pointer px-2 py-2 w-full'>remove</div> */}
                <Link href={`remove/${item._id}`}>Remove</Link>
                <Link href={`update/${item._id}`}>update</Link>
        </div>)
      })
    }
    </div>
    
    </div>
  )
}

export default itementrypage

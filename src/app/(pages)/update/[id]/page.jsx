import Item from "@/app/mongodb/models/item";
import Dbconnect from "@/app/mongodb/models/DBConnection";
import ExistingItemDisplay from "@/app/components/ExistingItemDisplay";
import ItemForm from "@/app/components/ItemForm";

async function updateData({params}){
    await Dbconnect();
    const item = await Item.findById(params.id);
    return(
        <div className='bg-gray-400 max-w-lg  mx-auto p-4 mt-36 rounded-lg text-lg'>
            <ExistingItemDisplay item={item} />
            <ItemForm item={item}/>   
        </div>
    )
}
export default updateData
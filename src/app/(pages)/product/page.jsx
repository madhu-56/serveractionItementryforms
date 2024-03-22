import DbConnection from '@/app/mongodb/models/DBConnection';
import Item from '@/app/mongodb/models/item';

function page() {
    const handleServer = async () => {
        "use server"
        console.log("server action activeted...")
        await DbConnection();
        
    };
  return (
    <div className='max-w-xl mx-auto mt-20'>
        <div>
            <form>
            <button formAction={handleServer}>Get Server</button>
            </form>
            
        </div>
      
    </div>
  )
}

export default page

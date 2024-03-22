
//catch all segment :[...cinfo]
function page({params}) {
    console.log(params);
  return (

    <div>
    college information
      {
        params.cinfo.map((data,i)=>
        {
            return(
                <p key={i}>{
                    data
                }</p>
            )
             
        }
        )  
      }
    </div>
  )
}

export default page

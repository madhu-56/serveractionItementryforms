// optional catch all segment : [...pinfo]

import React from 'react'

function page({params}) {
    console.log(params.pinfo);
    const {pinfo} =params;
  return (
    <div>
      college information
      { pinfo && 
      pinfo.map((product1,i)=>{
      return(
        <p key={i}>{product1}</p>
      )
      
    //   <p>{props}</p>

    })}
    </div>
  );
}

export default page

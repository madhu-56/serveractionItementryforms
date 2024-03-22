import React from 'react'

function page({params}) {
  console.log(params);
  return (
    <div>
      product list page:{params.pid}
    </div>
  )
}

export default page
// single product route creation
// /product/mobile/tv/bolb

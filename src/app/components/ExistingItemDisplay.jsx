import React from 'react'

function ExistingItemDisplay({item}) {
  return (
    <div className="p-4 max-w-lg mx-auto mb-2 text-sky-50">
        <div>privious item is : {item.itemName}</div>
        <div>privious price is : {item.price}</div>
      
    </div>
  )
}

export default ExistingItemDisplay

"use client"

import {useFormStatus} from 'react-dom'

function UpdateButton() {
    const {pending} = useFormStatus();
    console.log(pending)
  return (
    <>
    <fieldset>
        <button type="submit" className='my-5 px-5 py-1 bg-sky-200 text-sky-900 font-medium rounded-md'>
            {
                pending?"Updating......":"Update"
            }
        </button>
    </fieldset>
      
    </>
  )
}

export default UpdateButton

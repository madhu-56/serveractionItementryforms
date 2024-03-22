import {useFormStatus} from "react-dom";

function SubmitButton() {
    const {pending} = useFormStatus();
  return (
    <>
      <button className='px-5 mt-6 py-1 border border-red-500' type="submit"

      >
        {pending? "pending...":'Save Item'}
        
      
    </button>
    </>
  )
}

export default SubmitButton

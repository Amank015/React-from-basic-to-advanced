import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPaste } from '../redux/pasteSlice';
import toast from "react-hot-toast"
const Paste = () => {
  const pastes = useSelector((state)=>
  state.paste.pastes)
  console.log(pastes);

  const [searchTerm,setSearchTerm] = useState("")
  const dispatch = useDispatch();

  const filterData = pastes.filter(
    (pastes)=> pastes.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function handleDelete(pasteId)
  { 
    dispatch(removeFromPaste(pasteId))
  }
  return (
    <div>
      <input
      className='p-2 rounded-2xl min-w-[600px] mt-5 bg-black' 
      type='text'
      value={searchTerm}
      placeholder='search here'
      onChange={(e)=>setSearchTerm(e.target.value)}
      />
     <div className=' flex flex-col gap-5 mt-5'>
      {
        filterData.length > 0 &&
        filterData.map((paste)=>{
           return (
             <div className=' border'>
              <div>
             {paste.title}
              </div>
               <div>
             {paste.content}
              </div>
              <div className='flex flex-row gap-4 place-content-evenly'>
                <button>
                 <a href={`/?pasteId=${paste?._id}`}>
                  Edit
                 </a>
                </button>
                 <button>
                  <a href={`/pastes/${paste?._id}`}>
                    View
                  </a>
                 </button>
                  <button onClick={()=>handleDelete(paste?._id)}>Delete</button>
                   <button 
                   onClick={()=>
                   {
                    navigator.clipboard.writeText(paste?.content)
                    toast.success("Copied to clipboard")
                   }
                   }
                   >Copy</button>
                    <button>Share</button>
              </div>
              <div>
                {paste.createAt}
              </div>
             </div>
           )
        })
      }
     </div>
    </div>
  )
}

export default Paste

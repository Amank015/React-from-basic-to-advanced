import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ViewPaste = () => {

  const {id} = useParams();

const AllPastes = useSelector((state)=>state.paste.pastes)

const paste = AllPastes.find((paste)=>
paste._id ===id)



  return (
   <div>

    <div className=' flex flex-row gap-7 place-content-between'>
    <input
    type='text'
    className='p-1 rounded-2xl  bg-black mt-2 w-[60%] pl-4'
    placeholder='Enter title here'
    value={paste.title}
    disabled
    onChange={(e)=>setTitle(e.target.value)}
    />
   
     </div>
     <div className='mt-8'>
    <textarea 
    className="rounded-2xl mt-4 min-w-[500px] min-h-[500px] p-4 bg-black"
    value={paste.content}
    placeholder='enter content here'
    disabled
    onChange={(e)=>setValue(e.target.value)} 
    />
     </div>
    </div>
  )
}

export default ViewPaste

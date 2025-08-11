import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPaste, updateToPaste } from '../redux/pasteSlice';

const Home = () => {
    const [title,setTitle] = useState("");
    const [value,setValue] = useState("");
    const [searchParams,setSearchParams] = useSearchParams();

    const pasteId = searchParams.get("pasteId")
    const dispatch = useDispatch();
    const AllPastes = useSelector((state)=>state.paste.pastes)
    function createMyPaste() 
    {
      const pastes = {
        title:title,
        content:value,
        _id:pasteId || Date.now().toString(36),
        createAt: new Date().toString(),
      }

      if(pasteId)
      {
        //update
        dispatch(updateToPaste(pastes))
      }
      else{
        //create
        dispatch(addToPaste(pastes))
      }

     //After creation or updation
     setTitle("");
     setValue("");
     setSearchParams({});

    }


    useEffect(()=>
    {
      if(pasteId)
      {
        const paste = AllPastes.find((paste)=>
        paste._id === pasteId)
        setTitle(paste.title)
        setValue(paste.content)
      }
    },[pasteId])


  return (
    <div>

    <div className=' flex flex-row gap-7 place-content-between'>
    <input
    type='text'
    className='p-1 rounded-2xl  bg-black mt-2 w-[60%] pl-4'
    placeholder='Enter title here'
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
    />
    <button onClick={createMyPaste} className='p-2 rounded-2xl mt-2'>
        {
            pasteId ? "Update My Paste" : "Create My Paste"
        }
    </button>
     </div>
     <div className='mt-8'>
    <textarea 
    className="rounded-2xl mt-4 min-w-[500px] min-h-[500px] p-4 bg-black"
    value={value}
    placeholder='enter content here'
    onChange={(e)=>setValue(e.target.value)} 
    />
     </div>
    </div>
  )
}

export default Home
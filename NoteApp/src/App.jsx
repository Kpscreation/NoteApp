import React, { useState } from 'react'
import { X } from 'lucide-react'

const App = () => {

  const [name, setname] = useState('');
  const [desc, setdesc] = useState('');
  const [notes, setnotes] = useState([]);

  const SubmitHandler =(e)=>{
    e.preventDefault();
    console.log("Form Submitted Successfully");    
    let copyNotes=[...notes];
    copyNotes.push({name,desc});
    setnotes(copyNotes);
    console.log(copyNotes);

    setname('');
    setdesc('');
  }

  const nameChange=(e)=>{
    let newName = e;
    setname(e);
  }

  const descChange=(e)=>{
    let newDesc = e;
    setdesc(e);        
  }

  const deleteNote=(id)=>{
    const copyNotes=[...notes];    
    copyNotes.splice(id,1);
    setnotes(copyNotes);
  }

  return (
    <>
    <div className='w-full h-screen  overflow-auto lg:flex bg-black text-white  lg:gap-10'>
      <div className='w-full lg:w-1/2 py-12 px-8'>
        <h1 className='text-4xl font-sans font-bold py-4'>Add Notes</h1>
        <form action="#" className='flex flex-col gap-4 w-full' onSubmit={(e)=>{
          SubmitHandler(e);
        }}>
          <input onChange={(e)=>{
            nameChange(e.target.value);
          }} className='border-2 px-4 py-3 font-sans text-xl font-medium rounded' type="text" value={name} placeholder='Enter Notes Heading' />
          <textarea onChange={(e)=>{
            descChange(e.target.value);
          }} className='border-2 px-4 py-2 font-sans text-xl font-medium rounded h-32'  name="" id="" placeholder='Enter Notes Description' value={desc}></textarea>
          <button className='border-2 px-4 py-3 font-sans text-xl font-medium rounded cursor-pointer bg-white text-black'>Submit</button>
        </form>
      </div>
      <div className='w-full lg:w-1/2 lg:border-l-2 lg:border-white pl-5 py-12 px-12 h-full lg:overflow-auto' id="sc">
        <h1 className='text-4xl font-sans font-bold py-4'>Recent Notes</h1>
        <div className='w-full flex flex-wrap justify-center lg:justify-start gap-4'>
        {
        notes.map(function(e,idx){
            return <div key={idx} className='w-42 h-55 rounded-2xl relative'>
              <div className='relative w-full h-full z-1 py-7'>
                <h3 className='absolute left-[60%] top-8 cursor-pointer bg-red-600 p-2 rounded-full' onClick={()=>{ deleteNote(idx); }}><X/></h3>
                <h1 className='text-black leading-tight px-4 py-3 font-bold text-2xl font-sans text-wrap'>{e.name}</h1>
                <p className='text-blue-900  leading-tight   px-4 font-medium text-xll font-sans'>{e.desc}</p>
              </div>
              <img src={'./src/assets/img/notes.png'} className='absolute w-full h-full top-0 left-0 z-0' alt="" />
            </div>
        })
        }
       

        </div>
      </div>
    </div>
    </>
  )
}

export default App

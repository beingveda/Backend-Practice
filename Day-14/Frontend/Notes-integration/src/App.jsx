import React from 'react'
import { useState } from 'react';

const App = () => {

  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    setFormValues((prev)=>({...prev, [e.target.name]: e.target.value}))
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formValues)
  }

  setFormValues({
    title:""
  })
  return (
    <div className='h-screen p-5'>
      <h1 className='p-3 text-3xl font-semibold'>Notes App</h1>

      <form onSubmit={handleSubmit} className='p-5 w-70 border gap-5 border-gray-600 rounded-xl flex  flex-col'>
        <input 
        onChange={handleChange}
        name="title"
        className='p-2 outline-none text-xl rounded border border-gray-600'
        type='text' placeholder='Title'></input>
        
        <input 
        onChange={handleChange}
        name="description"
        className='p-2 outline-none text-xl rounded border border-gray-600' 
        type='text' placeholder='Description'></input>

        <button className='bg-blue-600 text-white p-2 rounded'>Add Note</button>
      </form>
    </div>
  )
}

export default App

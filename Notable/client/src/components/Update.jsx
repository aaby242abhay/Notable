import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { Link, useParams } from 'react-router-dom'
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useNavigate } from "react-router-dom";

const Contact = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')

  const { id } = useParams()
  let getNotes = async () => {
    let res = await fetch(`/api/notes/${id}`)
    let data = await res.json()
    setTitle(data.title)
    setDescription(data.description)
    setBody(data.body)
  }

  useEffect(() => {
    getNotes()
  },[])


  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();


    fetch(`/api/notes/update/${id}/`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, description, body})
    
    }).then(() => navigate('/'))

  };


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[1] bg-black-100 p-8 rounded-2xl'
      >
        <h3 className={styles.sectionHeadText}>Notable</h3>
        <p className={styles.sectionSubText}>Happy Noting!!!</p>
        

        <form
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Title</span>
            <input
              type='text'
              name='name'
              value ={title}
              onChange={ (e)=>setTitle(e.target.value)}
              placeholder= "Enter the title of the note."
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Description</span>
            <input
              type='text'
              name='description'
              value ={description}
              onChange={ (e)=>setDescription(e.target.value)}
              placeholder="Enter the description about the note in few words."
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Notes</span>
            <textarea
              rows={9}
              name='message'
              value ={body}
              onChange={ (e)=>setBody(e.target.value)}
              placeholder='Start typing your notes here...'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            Upload
          </button>
        </form>
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");

import React, { useEffect, useState} from 'react'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { Link, useParams } from 'react-router-dom'



const View = () => {
    
  const { id } = useParams()

  const [note, setNote] = useState({})
  let getNotes = async () => {
    let res = await fetch(`/api/notes/${id}`)
    let data = await res.json()
    setNote(data)
  };

  useEffect(() => {
    getNotes()
  })

  return (
    <div className='relative z-0 bg-primary'>
         <div style={{ marginTop: '70px' }}>
          <h2  className={`${styles.sectionHeadText}`}>{note.title} </h2>
          <p className={`${styles.sectionSubText} `}>{note.description}</p>
        </div>
        <div classtitle='w-full flex' style={{ marginTop: '10px', marginBottom : '10px' }}>
          <p
            classtitle='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >{note.body}
          </p>
        </div>
        <Link to={`/`} className='text-white font-medium text-[17px]'>
        <button
            type='submit'
            className='bg-tertiary py-3 px-3 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mt-14'
          >
            Return
        </button>
        </Link>

      </div>
  )
}

export default SectionWrapper(View, "")

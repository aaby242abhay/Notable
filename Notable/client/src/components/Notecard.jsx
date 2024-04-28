import React, { useEffect, useState } from "react";
import Tilt from "react-tilt/dist";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import notesIcon from "../assets/notesIcon.svg";
import deleteIcon from "../assets/deleteIcon.png";
import Newnote from "./CreateNewNote";

const Notecard = ({
    id,
    title,
    description,
    setNotes

}) => {
    let link = 'https://picsum.photos/id/' + id + '/5000/3333';

    const deleteHandler = async () => {
        console.log('Delete Handler')
        const res = await fetch(`/api/notes/delete/${id}/`, {
            method: 'DELETE',
        })
        const data = await res.json();
        setNotes(data);
    }

    return (

        <div>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                classtitle='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={link}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            className='bg-purple-900 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <Link to={`/update/${id}`}>Update
                                <img
                                    src={notesIcon}
                                    alt='source code'
                                    className='w-1/1 h-1/1 object-contain'
                                />
                            </Link>

                        </div>
                    </div>
                </div>

                <div className=' cursor-pointer mt-5 '>
                    <Link to={`/view/${id}`}>
                        <h3 className='text-white font-bold text-[24px]'>{title}</h3>
                        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                    </Link>
                </div>
                <div className='absolute bottom-0 right-0 flex justify-end m-13 mt-[-10px] mr-[-5px] card-img_hover'
                onClick=  {deleteHandler}>
                    <div
                        className='bg-purple-900 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
                    >
                            <div className='flex items-center' >
                                <img   src={deleteIcon} alt='Delete Icon' className='w-1/1 h-1/1 object-contain' /> 
                            </div>
                    </div>
                </div>
            </Tilt>
        </div>
    );
};

const Notecards = () => {

    let [notes, setNotes] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    let getNotes = async () => {
        setIsLoading(true);
        let resp = await fetch('/api/notes/')
        let data = await resp.json();
        setNotes(data);
        setIsLoading(false);
    }

    useEffect(() => {
        getNotes();

    }, []);
    if (isLoading) {
        return <h1>Loading...</h1>
    }


    return (
        <div className='relative z-0 bg-primary'>
            <div style={{ marginTop: '70px' }}>
                <h2 className={`${styles.sectionHeadText}`}>Notable </h2>
                <p className={`${styles.sectionSubText} `}>Note taking web Application</p>
            </div>
            <div classtitle='w-full flex' style={{ marginTop: '10px', marginBottom: '10px' }}>
                <p
                    classtitle='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                > A note-taking application is a useful tool for organizing and storing important information.
                    It allows users to create, edit, and delete notes, providing a convenient way to keep track of thoughts,
                    ideas, and reminders. Users can categorize notes with tags or labels, making it easier to search and filter
                    through a large collection of notes. The application may also support features like rich text formatting,
                    attachments, and synchronization across multiple devices. Overall, a note-taking application enhances
                    productivity and helps users stay organized in their personal and professional lives.
                </p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7' >
                {notes.map((note, index) => (
                    <Notecard key={`note-${index}`} index={index} setNotes={setNotes} {...note} />
                ))}
            </div>
            <Newnote />
        </div>
    );
};

export default SectionWrapper(Notecards, "");


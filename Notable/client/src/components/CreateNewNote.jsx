import React, { useEffect, useState } from "react";
import Tilt from "react-tilt/dist";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import newNote from "../assets/newNote.png";

const Newnote = () => {

    return (

        <Link to={`/create`}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                classtitle='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[350px]'>



                        <img
                            src={newNote}
                            alt='project_image'
                            className='w-full h-full object-cover rounded-2xl'
                        />
                </div>

                <div className='mt-10'>
                    <Link to={`/create`}>
                        <h3 className='text-white font-bold text-[24px]'>Add New Note</h3>
                        <p className='mt-2 text-secondary text-[14px]'>Imagination is the power of universe.</p>
                    </Link>
                </div>


            </Tilt>
        </Link>
    );
};



export default SectionWrapper(Newnote, "");


import React,{useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { AttendeesData } from './AttendeeData';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AttendeeDetails = () => {


  const { id } = useParams();
  const navigate = useNavigate();
  const attendee = AttendeesData[id];
  // const nextId = (Number(id) % AttendeesData.length) + 1
  // const prevId = (Number(id) - 2 + AttendeesData.length) % AttendeesData.length + 1;

  if (!attendee) {
    return <p>Attendee not found</p>;

  }

  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      '.attendee-image',
      { opacity: 0, y: -100 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: {
        trigger: ".attendee-image",
        start: "top 80%",
      }, }
    );

    gsap.fromTo(
      '.attendee-name , .attendee-company , .attendee-position',
      { opacity: 0, x: -100 }, 
      { opacity: 1, x: 0, duration: 1, delay: 0.2,stagger:0.2, ease: 'power2.out', scrollTrigger: {
        trigger: ".attendee-name",
        start: "top 80%",
      }, }
    );

    // gsap.fromTo(
    //   '.attendee-company',
    //   { opacity: 0, x: -100 },
    //   { opacity: 1, x: 0, duration: 1, delay: 0.4, ease: 'power2.out' }
    // );

    // gsap.fromTo(
    //   '.attendee-position',
    //   { opacity: 0, x: -100 },
    //   { opacity: 1, x: 0, duration: 1, delay: 0.6, ease: 'power2.out' }
    // );
  }, []);


  


  return (
    <div className='h-screen flex flex-col lg:flex-row gap-56 lg:gap-40 items-center bg-white'>
      <div className='h-1/3 lg:h-full relative w-full lg:w-1/3 flex justify-center'>
        <div className="h-screen overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='h-80 w-64 lg:h-96 absolute top-28 lg:-right-32 m-4 lg:w-80 bg-gray-400 shadow-2xl rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 attendee-image'>
          <img
            className='w-full h-full object-cover'
            src={attendee.personImage}
            alt={attendee.name}
          />
        </div>
      </div>
      <div className='relative flex-1 lg:self-start lg:pt-40 h-full'>
        <h1 className='attendee-name text-5xl lg:text-7xl mb-8 text-gray-800 font-bold transition-transform duration-1000 ease-in-out transform md:hover:translate-x-4'>
          {/* Name Surname */}  {attendee.name}
        </h1>
        <p className='attendee-company text-2xl mb-4 text-gray-600 font-medium'>
          {/* Company Name */}  {attendee.company}
        </p>
        <p className='attendee-position text-xl text-gray-500'>
          {/* Position At Company  */}  {attendee.position}
        </p>
        <div 
        // className='absolute '
        className='absolute bottom-1 left-1/3 lg:bottom-1/3 flex flex-row gap-4 justify-center'
        >
      <div className=''>
        {id>0 && <button
        onClick={() => navigate(`/attendee/${Number(id)-1}`)}
        className="mb-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
      >
        {'<<'}
      </button>}
      </div>
      <div>
        {id<AttendeesData.length-1 &&<button
        onClick={() => navigate(`/attendee/${Number(id)+1}`)}
        className="mb-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
      >
        {'>>'}
      </button>}
      </div>
      </div>
      </div>
      
    </div>
  );
};

export default AttendeeDetails;

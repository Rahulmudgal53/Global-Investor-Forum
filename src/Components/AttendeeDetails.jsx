import React,{useEffect} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AttendeeDetails = () => {

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
            src="https://via.placeholder.com/400x400"
            alt="AttendeeImage"
          />
        </div>
      </div>
      <div className='flex-1 lg:self-start lg:mt-40'>
        <h1 className='attendee-name text-5xl lg:text-7xl mb-12 text-gray-800 font-bold transition-transform duration-1000 ease-in-out transform md:hover:translate-x-4'>
          Name Surname
        </h1>
        <p className='attendee-company text-2xl mb-4 text-gray-600 font-medium'>
          Company Name
        </p>
        <p className='attendee-position text-xl text-gray-500'>
          Position At Company
        </p>
      </div>
    </div>
  );
};

export default AttendeeDetails;

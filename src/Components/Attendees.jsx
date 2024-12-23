import React from "react";
import '../App.css'
const attendees = [
    {
      name: 'John Doe',
      position: 'Software Engineer',
      company: 'Example Corp',
      location: 'New York, USA',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Smith',
      position: 'Product Manager',
      company: 'Tech Solutions',
      location: 'San Francisco, USA',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Alice Johnson',
      position: 'Designer',
      company: 'Innovate Inc',
      location: 'London, UK',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Bob Brown',
      position: 'Data Scientist',
      company: 'AI Labs',
      location: 'Toronto, Canada',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'John Doe',
      position: 'Software Engineer',
      company: 'Example Corp',
      location: 'New York, USA',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Smith',
      position: 'Product Manager',
      company: 'Tech Solutions',
      location: 'San Francisco, USA',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Alice Johnson',
      position: 'Designer',
      company: 'Innovate Inc',
      location: 'London, UK',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Bob Brown',
      position: 'Data Scientist',
      company: 'AI Labs',
      location: 'Toronto, Canada',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'John Doe',
      position: 'Software Engineer',
      company: 'Example Corp',
      location: 'New York, USA',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Smith',
      position: 'Product Manager',
      company: 'Tech Solutions',
      location: 'San Francisco, USA',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Alice Johnson',
      position: 'Designer',
      company: 'Innovate Inc',
      location: 'London, UK',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Bob Brown',
      position: 'Data Scientist',
      company: 'AI Labs',
      location: 'Toronto, Canada',
      image: 'https://via.placeholder.com/150',
    },
  ];

function Attendees() {
  return (
    <div className="bg-gradient-to-r from-[#963C96] via-[#F53232] to-[#FFBE5A]">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-center">
        <div className="mx-6 md:pl-12 pt-12 md:pt-0">
          <h2 className="font-Antonio mb-4 uppercase text-white text-2xl lg:text-5xl">Meet our 2025 attendees</h2>
          <p className="font-Archivo text-lg lg:text-xl text-white">
            Who’s joining us from your country? Check out the speakers and
            attendees coming to Web Summit from some 160 countries.
          </p>
          <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-yellow-600 duration-300 self-center">Book Ticket</button>
        </div >
        <img 
          src="https://websummit.com/wp-media/2024/01/Attendees-take-a-selfie-during-the-opening-night-of-Web-Summit-2023-at-the-Altice-Arena-in-Lisbon-Portugal-1024x683.jpg"
          alt=""
        />
      </div>

       <div className=" grid grid-cols-2  sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 p-8 bg-gray-100">
      {attendees.map((person, index) => (
        <div
          className=" p-[4px] hue-rotate-30 hover:gradient-border group relative overflow-hidden rounded-xl "
          key={index}
        >
          {/* Gradient border container */}
          <div className="h-full bg-white bg-transparent shadow rounded-xl  relative z-10">

            <div className=" overflow-hidden  rounded-t-lg ">
            <img
              className="w-full group-hover:scale-150 duration-500 h-40 object-cover"
              src={person.image}
              alt={person.name}
            />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold">{person.name}</h2>
              <p className="text-gray-500">{person.position}</p>
              <p className="text-gray-500">{person.company}</p>
              <p className="text-gray-400 text-sm">{person.location}</p>
            </div>
          </div>
          <span
      aria-hidden
      class="absolute overflow-hidden inset-0 z-0 scale-[3.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:opacity-0 before:group-hover:opacity-100 before:animate-none before:group-hover:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400">
    </span>
        </div>
      ))}
    </div>

    
      
      
      {/* <div className="flex flex-col gap-4 py-8 items-center">
        <div className="font-Antonio uppercase text-3xl md:text-5xl"> Speakers</div>
        <div className="px-12 md  grid gap-8  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
          {attendees.map((spearker, index)=>(
            <div className=" flex mt-20 pt-24  md:flex-col flex-row border-2 rounded-lg items-center relative" key={index}>
              <div className=" flex flex-col rotate-45 absolute -top-20 rounded-2xl bg-slate-600 overflow-hidden items-end">              <img className=" -rotate-45  border-double border-spacing-4 border-b-4" src={spearker.image} alt="" />
              </div>
              <div className="p-4  text-white space-y-3 text-left">
              <div className="text-lg sm:text-xl font-bold">{spearker.name}</div>
              <div className="text-sm sm:text-base">
                <span className="font-semibold">Position:</span> {spearker.position}
              </div>
              <div className="text-sm sm:text-base">
                <span className="font-semibold">Company:</span> {spearker.company}
              </div>
              <div className="text-sm sm:text-base">
                <span className="font-semibold">Location:</span> {spearker.location}
              </div>
            </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-700 mb-6">
        Attendees
      </h1>
      <div className="grid gap-6 border-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-8 ">
        {attendees.map((attendee, index) => (
          <div
            key={index}
            className=" flex gap-4 w-full max-w-xs bg-gradient-to-r from-[#963C96] via-[#F53232] to-[#FFBE5A] rounded-lg shadow-lg p-4 sm:p-4"
          >
            
            <div className=" justify-center mb-4">
              <img
                src={attendee.image}
                alt={`${attendee.name}'s Avatar`}
                className="w-30 h-20 rounded-full shadow-md border-4 border-white"
              />
            </div>
            
            <div className=" text-white space-y-3 text-left">
              <div className="text-lg sm:text-xl font-bold">{attendee.name}</div>
              <div className="text-sm sm:text-base">
                <span className="font-semibold">Position:</span> {attendee.position}
              </div>
              <div className="text-sm sm:text-base">
                <span className="font-semibold">Company:</span> {attendee.company}
              </div>
              <div className="text-sm sm:text-base">
                <span className="font-semibold">Location:</span> {attendee.location}
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
        

  
  );
}

export default Attendees;

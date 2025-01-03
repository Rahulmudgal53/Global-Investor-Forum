
// import React from "react";

// import { useState } from "react";
// import { FaCircle } from "react-icons/fa6";
// const TicketSection = () => {
//   const tickets = [
//     {
//       title: "One-Day Pass",
//       price: "€730",
//       originalPrice: "€900",
//       discount: "Save €170 off the late price, with 18.89% Discount.",
//       buttonText: "Book Now",
//       detailsText: "What's Included ↓",
//       includes: [
//         "Access to all Scheduled session, including networking events and conferences.",
//       ],
//     },
//     {
//       title: "Standard Pass",
//       price: "€1140",
//       originalPrice: "€3000",
//       discount: "Save €1860 off the late price, with a 62% Discount.",
//       buttonText: "Book Now",
//       detailsText: "What's Included ↓",
//       includes: [
//         "Access to all Scheduled session, including networking events and lunch on both days.",
//       ],
//     },
//     {
//       title: "VIP Pass",
//       price: "€2999",
//       originalPrice: "€5999",
//       discount: "Save €3000 off the late price, with a 50% Discount.",
//       buttonText: "Book Now",
//       detailsText: "What's Included ↓",
//       includes: [
//         "Exclusive access to all conference sessions, networking events, and lunch.",
//         "Priority seating with reserved front-row seats.",
//         "24/7 Customer services.",
//         "Exclusive post-event access to speaker materials (slides and videos, subject to speaker consent).",
//       ],
//     },
//     {
//       title: "Guest Visitor Startup Pass",
//       price: "€1899",
//       originalPrice: "€3899",
//       discount: "Save €2000 off the late price, with a 51% Discount.",
//       buttonText: "Book Now",
//       detailsText: "What's Included ↓",
//       includes: [
//         "Comprehensive access to all conference sessions, networking events, and lunch.",
//         "Includes strategic promotional opportunities for startups and award nominees.",
//         "Pass issuance subject to applicant evaluation by the GIF.",
//       ],
//     },
//   ];

//   const additionalInfo = [
//     {
//       title:
//         "Government Officials, Academic, Student, Charity & Association Discount:",
//       description:
//         "To qualify for a discounted ticket, you must be affiliated with a government entity, academic institution, charitable organization, or association. Please note that this discount is subject to verification.",
//       buttonText: "Apply Now",
//     },
//     {
//       title: "Group Bookings:",
//       description:
//         "Bring your team to the forefront of AI innovation. Group bookings offer exclusive discounts, personalized support, and unparalleled networking opportunities. Unlock significant discounts on bulk ticket purchases now.",
//       buttonText: "Contact GAIS Registration Team",
//     },
//   ];

//   const timelineEvents = [
//     { label: "Early Bird", date: "2025-02-15" },
//     { label: "Regular", date: "" },
//     { label: "Late Price", date: "" },
//   ];

//   const today = new Date();
//   console.log(today)
//   const updatedEvents = timelineEvents.map((event, index) => {
//     const eventDate = new Date(event.date);
//     console.log(eventDate)
//     const isActive = today <= eventDate; // Active if today is before the event end date
//     return {
//       ...event,
//       isActive,
//       dynamicColor: isActive ?"bg-yellow-500":"bg-white", // Apply default color if not active
//     };
//   });

//   // State to track which ticket's "Includes" section is open
//   const [openIncludes, setOpenIncludes] = useState(null);

//   return (
//     <section className="py-12 bg-black text-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl lg:text-7xl font-Antonio uppercase font-bold text-center mb-6">
//           Main Conference Tickets
//         </h2>
//         <p className="text-center font-Antonio uppercase text-white text-lg lg:text-3xl mb-12">Your Pass To the Future of AI, Immerse Yourself in the AI Ecosystem.</p>
//         {/* <marquee className=" py-2 font-Archivo text-center font-bold text-yellow-500 text-lg lg:text-xl mb-12">
//           Early Bird prices will be valid till 15th November 2024. Local German
//           taxes plus processing fees (3.18%) will be applicable on all tickets.
//         </marquee> */}

//         {/* Timeline */}
//         <div className="flex items-center space-x-2">
//         {updatedEvents.map((event, index) => (
//           <div
//             key={index}
//             className={`h-2 transition-all ${event.dynamicColor}`}
//             style={{ width: `${100 / updatedEvents.length}%` }}
//           ></div>
//         ))}
//       </div>
//       <div className="flex justify-around mt-4">
//         {updatedEvents.map((event, index) => (
//           <div key={index} className="">
//             <p
//               className={`text-md font-semibold ${
//                 event.isActive ? "text-yellow-500":"text-white"
//               }`}
//             >
//               {event.label}
//             </p>
//             {
//               index===0?
//               <p className={`text-md ${
//                 event.isActive ? "text-yellow-500":"text-white"
//               }`}>
//                {/* {event.date} */}
//                15-February
//             </p>
//             :""
//             }
//           </div>
//         ))}
//       </div>

//         {/* Ticket Cards */}
//         <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {tickets.map((ticket, index) => (
            
//             <div
//               key={index}
//               className=""
//             >
//               <div className="bg-gradient-to-br from-purple-800 via-blue-700 to-indigo-900 p-6 rounded-lg flex flex-col text-center ">
//               <h3 className="text-xl font-bold uppercase mb-4">
//                 {ticket.title}
//               </h3>
//               <p className="text-3xl font-bold text-yellow-400">
//                 {ticket.price}
//               </p>
//               <p className="text-xl text-white font-semibold line-through">
//                 {ticket.originalPrice}
//               </p>
//               <p className="text-sm mt-2">{ticket.discount}</p>
//               <button className="bg-yellow-500 text-white py-2 px-4 rounded mt-4 hover:bg-yellow-600 duration-300 self-center">
//                 {ticket.buttonText}
//               </button>
//               <button
//                 className=" font-semibold text-sm mt-2 self-center"
//                 onClick={() =>
//                   setOpenIncludes(openIncludes === index ? null : index)
//                 }
//               >
//                 {openIncludes === index ?"What's Included ↑": "What's Included ↓"}
                
//               </button>             
//               </div>

//                 <div className="bg-gradient-to-bl from-indigo-900 via-blue-700 to-purple-800 rounded-b-lg -mt-4">
//                 {openIncludes === index && (
//                 <div className="flex flex-col shadow-md z-10">
//                   {/* <div className="flex flex-row-reverse justify-between">
//                   <button
//                     className=" py-2 px-4 text-black font-bold bg-yellow-500 text-right "
//                     onClick={() => setOpenIncludes(null)}
//                   >
//                     X
//                   </button>
//                   <h4 className="flex-1 pt-2 text-lg font-bold ">Includes:</h4>
//                   </div> */}
//                   <ul className=" p-6 pl-8 pt-2 text-left">
//                     {ticket.includes.map((item, itemIndex) => (
//                       <div key={itemIndex} className="">
//                         <li className="list-disc text-sm mt-1">
//                         {item}
//                       </li>
//                       </div>
//                     ))}
//                   </ul>
                  
//                 </div>
//               )}
//                 </div>

//             </div>
//           ))}
//         </div>



//         {/* Additional Info Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
//           {additionalInfo.map((info, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-br from-purple-800 via-blue-700 to-indigo-900 p-6 rounded-lg shadow-lg flex flex-col justify-between"
//             >
//               <h4 className="text-xl font-bold">{info.title}</h4>
//               <p className="text-sm mt-4">{info.description}</p>
//               <button className="bg-yellow-500 text-white  py-2 px-4 rounded mt-4 hover:bg-yellow-600 self-center">
//                 {info.buttonText}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TicketSection;





import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TicketSection = () => {
  const tickets = [
    {
      title: "One-Day Pass",
      price: "€730",
      originalPrice: "€900",
      discount: "Save €170 off the late price, with 18.89% Discount.",
      buttonText: "Book Now",
      detailsText: "What's Included ↓",
      includes: [
        "Access to all Scheduled session, including networking events and conferences.",
      ],
    },
    {
      title: "Standard Pass",
      price: "€1140",
      originalPrice: "€3000",
      discount: "Save €1860 off the late price, with a 62% Discount.",
      buttonText: "Book Now",
      detailsText: "What's Included ↓",
      includes: [
        "Access to all Scheduled session, including networking events and lunch on both days.",
      ],
    },
    {
      title: "VIP Pass",
      price: "€2999",
      originalPrice: "€5999",
      discount: "Save €3000 off the late price, with a 50% Discount.",
      buttonText: "Book Now",
      detailsText: "What's Included ↓",
      includes: [
        "Exclusive access to all conference sessions, networking events, and lunch.",
        "Priority seating with reserved front-row seats.",
        "24/7 Customer services.",
        "Exclusive post-event access to speaker materials (slides and videos, subject to speaker consent).",
      ],
    },
    {
      title: "Guest Visitor Startup Pass",
      price: "€1899",
      originalPrice: "€3899",
      discount: "Save €2000 off the late price, with a 51% Discount.",
      buttonText: "Book Now",
      detailsText: "What's Included ↓",
      includes: [
        "Comprehensive access to all conference sessions, networking events, and lunch.",
        "Includes strategic promotional opportunities for startups and award nominees.",
        "Pass issuance subject to applicant evaluation by the GIF.",
      ],
    },
  ];

  const additionalInfo = [
    {
      title:
        "Government Officials, Academic, Student, Charity & Association Discount:",
      description:
        "To qualify for a discounted ticket, you must be affiliated with a government entity, academic institution, charitable organization, or association. Please note that this discount is subject to verification.",
      buttonText: "Apply Now",
    },
    {
      title: "Group Bookings:",
      description:
        "Bring your team to the forefront of AI innovation. Group bookings offer exclusive discounts, personalized support, and unparalleled networking opportunities. Unlock significant discounts on bulk ticket purchases now.",
      buttonText: "Contact GAIS Registration Team",
    },
  ];

  const timelineEvents = [
    { label: "Early Bird", date: "2025-02-15" },
    { label: "Regular", date: "" },
    { label: "Late Price", date: "" },
  ];

  const today = new Date();
  const updatedEvents = timelineEvents.map((event, index) => {
    const eventDate = new Date(event.date);
    const isActive = today <= eventDate;
    return {
      ...event,
      isActive,
      dynamicColor: isActive ? "bg-yellow-500" : "bg-white",
    };
  });

  const [openIncludes, setOpenIncludes] = useState(null);

   
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      

      gsap.utils.toArray(".ticket-card").forEach((card, index) => {
              gsap.fromTo(
                card,
                { opacity: 0, scale: 0.8 },
                {
                  opacity: 1,
                  scale: 1,
                  duration: 1,
                  stagger: 0.2,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none none",
                  },
                }
              );
            });

            gsap.utils.toArray(".additional-info-card").forEach((card, index) => {
              gsap.fromTo(
                card,
                { opacity: 0, scale: 0.8 },
                {
                  opacity: 1,
                  scale: 1,
                  duration: 1,
                  stagger:0.2,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none none",
                  },
                }
              );
            });
    }, containerRef);

    return () => ctx.revert(); // Clean up GSAP context on component unmount
  }, []);

  // return (
  //   <section ref={containerRef} className="py-12 bg-gradient-to-b from-black via-gray-900 to-black text-white">
  //     <div className="container mx-auto px-4">
  //       <h2 className="text-4xl lg:text-7xl font-Antonio uppercase font-bold text-center mb-6">
  //         Main Conference Tickets
  //       </h2>
  //       <p className="text-center font-Antonio uppercase text-white text-lg lg:text-3xl mb-12">
  //         Your Pass To the Future of AI, Immerse Yourself in the AI Ecosystem.
  //       </p>

  //       {/* Timeline */}
  //       <div className="flex items-center space-x-2">
  //         {updatedEvents.map((event, index) => (
  //           <div
  //             key={index}
  //             className={`h-2 transition-all ${event.dynamicColor}`}
  //             style={{ width: `${100 / updatedEvents.length}%` }}
  //           ></div>
  //         ))}
  //       </div>
  //       <div className="flex justify-around mt-4">
  //         {updatedEvents.map((event, index) => (
  //           <div key={index}>
  //             <p
  //               className={`text-md font-semibold ${
  //                 event.isActive ? "text-yellow-500" : "text-white"
  //               }`}
  //             >
  //               {event.label}
  //             </p>
  //             {index === 0 && (
  //               <p
  //                 className={`text-md ${
  //                   event.isActive ? "text-yellow-500" : "text-white"
  //                 }`}
  //               >
  //                 15-February
  //               </p>
  //             )}
  //           </div>
  //         ))}
  //       </div>

  //       {/* Ticket Cards */}
  //       <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  //         {tickets.map((ticket, index) => (
  //           <div
  //             key={index}
  //             className="ticket-card bg-gradient-to-br from-purple-800 via-blue-700 to-indigo-900 p-6 rounded-lg flex flex-col text-center"
  //           >
  //             <h3 className="text-xl font-bold uppercase mb-4">
  //               {ticket.title}
  //             </h3>
  //             <p className="text-3xl font-bold text-yellow-400">
  //               {ticket.price}
  //             </p>
  //             <p className="text-xl text-white font-semibold line-through">
  //               {ticket.originalPrice}
  //             </p>
  //             <p className="text-sm mt-2">{ticket.discount}</p>
  //             <button className="bg-yellow-500 text-white py-2 px-4 rounded mt-auto hover:bg-yellow-600 duration-300">
  //               {ticket.buttonText}
  //             </button>
  //             <button
  //               className="font-semibold text-sm mt-2"
  //               onClick={() =>
  //                 setOpenIncludes(openIncludes === index ? null : index)
  //               }
  //             >
  //               {openIncludes === index
  //                 ? "What's Included ↑"
  //                 : "What's Included ↓"}
  //             </button>
  //             {openIncludes === index && (
  //               <ul className="p-6 pl-8 pt-2 text-left">
  //                 {ticket.includes.map((item, itemIndex) => (
  //                   <li key={itemIndex} className="list-disc text-sm mt-1">
  //                     {item}
  //                   </li>
  //                 ))}
  //               </ul>
  //             )}
  //           </div>
  //         ))}
  //       </div>

  //       {/* Additional Info Section */}
  //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
  //         {additionalInfo.map((info, index) => (
  //           <div
  //             key={index}
  //             className="additional-info-card bg-gradient-to-br from-purple-800 via-blue-700 to-indigo-900 p-6 rounded-lg"
  //           >
  //             <h4 className="text-xl font-bold">{info.title}</h4>
  //             <p className="text-sm mt-4">{info.description}</p>
  //             <button className="bg-yellow-500 text-white py-2 px-4 rounded mt-4 hover:bg-yellow-600">
  //               {info.buttonText}
  //             </button>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );

  return (
    <section ref={containerRef} className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-7xl font-Antonio uppercase font-bold text-center mb-6">
          Main Conference Tickets
        </h2>
        <p className="text-center font-Antonio uppercase text-lg lg:text-3xl mb-12 text-transparent bg-gradient-to-r from-teal-400 via-yellow-400 to-red-400 bg-clip-text">Your Pass To the Future of AI, Immerse Yourself in the AI Ecosystem.</p>
        {/* <marquee className=" py-2 font-Archivo text-center font-bold text-yellow-500 text-lg lg:text-xl mb-12">
          Early Bird prices will be valid till 15th November 2024. Local German
          taxes plus processing fees (3.18%) will be applicable on all tickets.
        </marquee> */}

        {/* Timeline */}
        <div className="flex items-center space-x-2">
        {updatedEvents.map((event, index) => (
          <div
            key={index}
            className={`h-2 transition-all ${event.dynamicColor}`}
            style={{ width: `${100 / updatedEvents.length}%` }}
          ></div>
        ))}
      </div>
      <div className="flex justify-around mt-4">
        {updatedEvents.map((event, index) => (
          <div key={index} className="">
            <p
              className={`text-md font-semibold ${
                event.isActive ? "text-yellow-500":"text-white"
              }`}
            >
              {event.label}
            </p>
            {
              index===0?
              <p className={`text-md ${
                event.isActive ? "text-yellow-500":"text-white"
              }`}>
               {/* {event.date} */}
               15-February
            </p>
            :""
            }
          </div>
        ))}
      </div>

        {/* Ticket Cards */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tickets.map((ticket, index) => (
            
            <div
              key={index}
              className="ticket-card"
            >
              <div className="bg-gradient-to-br from-purple-800 via-blue-700 to-indigo-900 p-6 rounded-lg flex flex-col text-center ">
              <h3 className="text-xl font-bold uppercase mb-4">
                {ticket.title}
              </h3>
              <p className="text-3xl font-bold text-yellow-400">
                {ticket.price}
              </p>
              <p className="text-xl text-white font-semibold line-through">
                {ticket.originalPrice}
              </p>
              <p className="text-sm mt-2">{ticket.discount}</p>
              <button className="bg-yellow-500 text-white py-2 px-4 rounded mt-4 hover:bg-yellow-600 duration-300 self-center">
                {ticket.buttonText}
              </button>
              <button
                className=" font-semibold text-sm mt-2 self-center"
                onClick={() =>
                  setOpenIncludes(openIncludes === index ? null : index)
                }
              >
                {openIncludes === index ?"What's Included ↑": "What's Included ↓"}
                
              </button>             
              </div>

                <div className="bg-gradient-to-bl from-indigo-900 via-blue-700 to-purple-800 rounded-b-lg -mt-4">
                {openIncludes === index && (
                <div className="flex flex-col shadow-md z-10">
                  {/* <div className="flex flex-row-reverse justify-between">
                  <button
                    className=" py-2 px-4 text-black font-bold bg-yellow-500 text-right "
                    onClick={() => setOpenIncludes(null)}
                  >
                    X
                  </button>
                  <h4 className="flex-1 pt-2 text-lg font-bold ">Includes:</h4>
                  </div> */}
                  <ul className=" p-6 pl-8 pt-2 text-left">
                    {ticket.includes.map((item, itemIndex) => (
                      <div key={itemIndex} className="">
                        <li className="list-disc text-sm mt-1">
                        {item}
                      </li>
                      </div>
                    ))}
                  </ul>
                  
                </div>
              )}
                </div>

            </div>
          ))}
        </div>



        {/* Additional Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {additionalInfo.map((info, index) => (
            <div
              key={index}
              className="additional-info-card bg-gradient-to-br from-purple-800 via-blue-700 to-indigo-900 p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <h4 className="text-xl font-bold">{info.title}</h4>
              <p className="text-sm mt-4">{info.description}</p>
              <button className="bg-yellow-500 text-white  py-2 px-4 rounded mt-4 hover:bg-yellow-600 self-center">
                {info.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default TicketSection;


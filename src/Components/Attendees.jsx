import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const attendees = [
    {
      "name": "Maria J. Alonso",
      "position": "CEO",
      "company": "Qaleon",
      "location": "N/A",
      "image": "https://via.placeholder.com/150"
    },
    {
      "name": "Stefan Schwarz",
      "position": "Manager",
      "company": "Flytxt",
      "location": "N/A",
      "image": "https://via.placeholder.com/150"
    },
    {
      "name": "Sagi Lahav",
      "position": "CTO & Co-founder",
      "company": "Chronom",
      "location": "N/A",
      "image": "https://via.placeholder.com/150"
    },
    {
      "name": "Anna Mae Yu Lamentio",
      "position": "Founder",
      "company": "NightOwlGpt",
      "location": "N/A",
      "image": "https://via.placeholder.com/150"
    },
    {
      "name": "Dennis Tan",
      "position": "Co-founder",
      "company": "Dashmote",
      "location": "N/A",
      "image": "https://via.placeholder.com/150"
    },
    {
      "name": "Deepesh Trivedi",
      "position": "CEO",
      "company": "UIB",
      "location": "N/A",
      "image": "https://via.placeholder.com/150"
    },
    {
      "name": "Alexander Gunkel",
      "position": "Founder",
      "company": "Space4Good",
      "location": "N/A",
      "image": "https://via.placeholder.com/150"
    },
    {
      "name": "Naresh Prajapati",
      "position": "CEO",
      "company": "Azilen Technologies",
      "location": "N/A",
      "image": "https://via.placeholder.com/150"
    },
    {
      "name": "Maria Cayuela",
      "position": "CEO",
      "company": "BioSmartData",
      "location": "N/A",
      "image": "https://via.placeholder.com/150"
    },
    {
      "name": "Geeta Sham",
      "position": "Managing Director",
      "company": "CamCom",
      "location": "N/A",
      "image": "https://via.placeholder.com/150"
    },
    {
      "name": "Álvaro Sáez Tonda",
      "position": "CEO",
      "company": "Hechicher IA",
      "location": "N/A",
      "image": "https://via.placeholder.com/150"
    },
    {
      "name": "Alexis Crowell",
      "position": "CMO",
      "company": "Axelera AI",
      "location": "N/A",
      "image": "https://via.placeholder.com/150"
    },
    {
      "name": "Rafael Bodego",
      "position": "Founder",
      "company": "Borg AI",
      "location": "N/A",
      "image": "https://via.placeholder.com/150"
    },
    {
      "name": "Alex Polyakov",
      "position": "CEO",
      "company": "Adversa AI",
      "location": "N/A",
      "image": "https://via.placeholder.com/150"
    },
    {
      "name": "Samuel Hazak",
      "position": "Co-founder",
      "company": "Equanimity AI",
      "location": "N/A",
      "image": "https://via.placeholder.com/150"
    },
    {
      "name": "Hicham El Hafed",
      "position": "Director",
      "company": "Procys",
      "location": "N/A",
      "image": "https://via.placeholder.com/150"
    }];

function Attendees() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text and button
      gsap.fromTo(
        ".header-content",
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          delay:0.3,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".header-content",
            start: "top 80%",
          },
        }
      );

      // Animate image
      gsap.fromTo(
        ".header-image",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          delay:0.2,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".header-image",
            start: "top 80%",
          },
        }
      );

      // Animate attendee cards
      gsap.utils.toArray(".attendee-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
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

    return () => ctx.revert();
  }, []);


  const navigate = useNavigate();
  function goToAtendeeDetails(){
    navigate('/attendeeDetails')
  }

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-r from-[#963C96] via-[#F53232] to-[#FFBE5A]"
    >
      {/* Header Section */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-center">
        <div className="header-content mx-6 md:pl-12 pt-12 md:pt-0">
          <h2 className="font-Antonio mb-4 uppercase text-white text-2xl lg:text-5xl">
            Meet our 2025 attendees
          </h2>
          <p className="font-Archivo text-lg lg:text-xl text-white">
            Who’s joining us from your country? Check out the speakers and
            attendees coming to Web Summit from some 160 countries.
          </p>
          <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-yellow-600 duration-300 self-center">
            Book Ticket
          </button>
        </div>
        <img
          className="header-image"
          src="https://websummit.com/wp-media/2024/01/Attendees-take-a-selfie-during-the-opening-night-of-Web-Summit-2023-at-the-Altice-Arena-in-Lisbon-Portugal-1024x683.jpg"
          alt=""
        />
      </div>

      {/* Attendees Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 p-8 bg-gray-100">
        {attendees.map((person, index) => (
          <div
            key={index} onClick={goToAtendeeDetails}
            className="attendee-card p-[4px] hue-rotate-30 hover:gradient-border group relative overflow-hidden rounded-xl"
          >
            {/* Gradient Border Container */}
            <div className="h-full bg-white bg-transparent shadow rounded-xl relative z-10">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  className="w-full group-hover:scale-150 duration-500 h-40 object-cover"
                  src={person.image}
                  alt={person.name}
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold">{person.name}</h2>
                <p className="text-gray-500">{person.position}</p>
                <p className="text-gray-700">{person.company}</p>
              </div>
            </div>
            <span
              aria-hidden
              className="absolute overflow-hidden inset-0 z-0 scale-[3.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:opacity-0 before:group-hover:opacity-100 before:animate-none before:group-hover:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendees;

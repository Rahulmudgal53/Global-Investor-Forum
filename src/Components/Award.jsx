import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import aiIntegration from "../assets/AI-INTEGRATION EXCELLENCE AWARD.png";
// import innovativeStartup from "../assets/The Innovative AI-Powered Startup Award.png";
// import bestAISolutions from "../assets/Best AI-Powered Solutions for Industry Award.png";
// import aiEcosystem from "../assets/The AI Ecosystem Excellence Award.png";
import AwardLogo from "../assets/Award.png";

gsap.registerPlugin(ScrollTrigger);

const Award = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".title",
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".title",
            start: "top 80%",
            toggleActions: "play none none none",
            // markers: true,
          },
        }
      );

      // Goal items animation
      gsap.utils.toArray(".goal").forEach((goal) => {
        gsap.fromTo(
          goal,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: goal,
              start: "top 90%",
              toggleActions: "play none none none",
              // markers: true,
            },
          }
        );
      });

      // Reasons to apply animation
      gsap.utils.toArray(".reason").forEach((reason) => {
        gsap.fromTo(
          reason,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: reason,
              start: "top 90%",
              toggleActions: "play none none none",
              // markers: true,
            },
          }
        );
      });

      // Award cards animation
      gsap.utils.toArray(".award-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
              // markers: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const aiSummitData = {
    title: "Honoring the Excellence within AI Ecosystem",
    summitDetails: {
      description: `In the rapidly evolving landscape of artificial intelligence, recognition and celebration are paramount. As AI continues to redefine industries and shape our world, it's imperative to acknowledge the pioneers, innovators, and visionaries who are driving this technological revolution.`,
      goals: [
        {
          title: "Inspire Innovation",
          description:
            "Highlight groundbreaking AI solutions that are pushing the boundaries of what is possible.",
        },
        {
          title: "Recognize Excellence",
          description:
            "Celebrate the dedication and hard work of the individuals and teams behind these remarkable achievements.",
        },
        {
          title: "Foster Collaboration",
          description:
            "Create a platform for industry leaders to connect, share knowledge, and drive collective progress.",
        },
        {
          title: "Promote Ethical AI",
          description:
            "Recognize organizations committed to responsible and ethical AI development.",
        },
      ],
    },
    reasonsToApply: [
      {
        imgSrc: "https://kuber.ventures/wp-content/uploads/2024/09/1.jpg",
        title: "Celebrate and Acknowledge Team Effort",
        description:
          "Show appreciation for the relentless efforts of your team, recognizing their hard work to innovate with AI.",
      },
      {
        imgSrc:
          "https://www.umassmed.edu/globalassets/systems-and-psychosocial-advances-research-center/__2023-folders/decorative-images/teamwork-generic-and-diverse.jpg",
        title: "Inspire and Motivate",
        description:
          "Enhance team morale and attract top talent by showcasing your dedication to transformative innovation.",
      },
      {
        imgSrc:
          "https://img.freepik.com/premium-photo/human-hand-showing-boost-your-brand-text-wooden-block-business-concept_220873-79.jpg",
        title: "Boost Credibility and Brand Value",
        description:
          "Demonstrate your commitment to cutting-edge technology, solidifying your brand’s reputation as a leader in AI integration.",
      },

      {
        imgSrc:
          "https://media.licdn.com/dms/image/v2/D5612AQFMgZi_18IQDA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1659632275469?e=1738195200&v=beta&t=m7Bb6ODSLm6pZYOA6Y-0c1IupKqfB1JtVtG9zu7oXPY",
        title: "Get Recognition at the World's Largest AI Gathering",
        description:
          "Be recognized as an AI innovator and stand shoulder-to-shoulder with industry leaders as a finalist at the world's premier AI event.",
      },
      {
        imgSrc:
          "https://naiknaik.com/wp-content/uploads/2023/11/pexels-eduardo-romero-3649407-1024x683.jpg",
        title: "Global Promotion Package",
        description:
          "Winners receive extensive media exposure, an award logo, and a prestigious trophy to showcase your success.",
      },
    ],
    awards: [
      {
        title: "The AI Integration Excellence Award",
        description:
          "Acknowledges companies that have seamlessly embedded AI into their business processes, offering AI-driven solutions and encouraging others to adopt AI through their innovative AI-powered solutions.",
        // imgSrc: aiIntegration,
      },
      {
        title: "The Innovative AI-Powered Startup Award",
        description:
          "This award celebrates the promising startups that are pioneering new frontiers in AI, showcasing their potential to disrupt industries and shape the future.",
        // imgSrc: innovativeStartup,
      },
      {
        title: "Best AI-Powered Solutions for Industry Award",
        description:
          "This award honors the most outstanding AI-powered companies and their innovative solutions that are revolutionizing specific industries, boosting efficiency, productivity, and growth.",
        // imgSrc: bestAISolutions,
      },
      {
        title: "The AI Ecosystem Excellence Award",
        description:
          "This award recognizes organizations that are driving the growth and development of the AI ecosystem.",
        // imgSrc: aiEcosystem,
      },
    ],
  };

  const gradients = [
    "from-purple-500 via-pink-500 to-red-500",
    "from-blue-800 via-green-500 to-teal-600",
    "from-yellow-400 via-orange-500 to-red-500",
    "from-indigo-500 via-purple-500 to-pink-500",
  ];

  const { title, summitDetails, reasonsToApply, awards } = aiSummitData;

  return (
    <div ref={containerRef}>
      <section
        className="h-screen flex justify-left items-top bg-cover bg-center p-8 sm:p-16 md:p-32 "
        style={{
          backgroundImage:
            "url('https://media.licdn.com/dms/image/v2/C4D12AQHRdpT3XD12CQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1649787353589?e=1738195200&v=beta&t=QZQxCP6MyIA_UiT9Dpv9z4GcvWlmQTaNoXQInZWMbNs')",
        }}
      >
        <h1
          className=" title uppercase md:p-24 p-5 pt-24 md-pt-0 text-5xl lg:text-7xl font-Antonio font-semibold text-yellow-500 tracking-wide w-1/2  
        "
        >
          {title}
        </h1>
      </section>

      <section className=" goal px-6 py-12 bg-gradient-to-r from-purple-500 to-pink-500 lg:px-32">
        <p className="text-white text-lg font-Archivo mb-6 ">
          {summitDetails.description}
        </p>
        <ul className="text-white text-lg font-Archivo space-y-2 list-disc pl-5">
          {summitDetails.goals.map((goal, index) => (
            <li key={index}>
              <span className="font-bold">{goal.title} : </span>
              {goal.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="p-6 sm:p-12 bg-gradient-to-r from-pink-500 to-purple-500">
        <h2 className="text-center text-2xl sm:text-4xl md:text-5xl uppercase font-Antonio font-bold text-yellow-400 mb-8">
          5 Reasons Why You Should Apply
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-20">
          {reasonsToApply.map((reason, index) => (
            <div
              key={index}
              className="reason p-4 bg-black/50 backdrop:blur-md shadow-lg rounded-md"
            >
              <img
                src={reason.imgSrc}
                className="w-full h-40 sm:h-48 object-cover rounded-md"
                alt={reason.title}
              />

              <h3 className="text-lg leading-tight md:text-2xl font-bold mt-4 pb-2 font-Archivo text-transparent bg-gradient-to-r from-teal-400 via-yellow-400 to-red-400 bg-clip-text ">
                {reason.title}
              </h3>
              <p className="text-white leading-none font-Archivo md:text-xl">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-8 bg-gray-100 lg:px-32">
        <h2 className="text-center text-2xl sm:text-4xl md:text-5xl uppercase font-Antonio font-bold text-yellow-400 mb-8">
          Our Featured Awards
        </h2>
        <div className="space-y-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`award-card flex flex-col ${
                index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center bg-white p-6 sm:p-12 rounded-md shadow-md`}
            >
              {/* <img
                src={award.imgSrc}
                alt={award.title}
                className="w-full sm:w-48 h-48 object-contain rounded-md mb-4 lg:mb-0 flex-1"
              /> */}
              <div className="flex justify-center flex-1 px-4  pt-24 pb-4">
                <div
                  className={`relative flex items-center w-60 h-56 rounded bg-gradient-to-r ${
                    gradients[index % gradients.length]
                  }
 text-center `}
                >
                  <p className="px-6 text-2xl text-white font-Archivo font-bold">
                    {award.title}
                  </p>
                  <div className="brightness-120 absolute -top-24 -left-14 w-32">
                    <img src={AwardLogo} alt="Award logo" />
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-left lg:ml-6 flex-1">
                <h3 className="text-xl md:text-3xl font-Archivo font-bold text-transparent bg-gradient-to-r from-blue-600 via-red-500 to-yellow-600 bg-clip-text mb-4">
                  {award.title}
                </h3>
                <p className="font-Archivo text-gray-600 text-sm md:text-xl mb-4">
                  {award.description}
                </p>
                <div className="flex flex-row justify-center gap-4 lg:justify-start">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded text-sm uppercase md:font-Archivo font-bold">
                    Find Details
                  </button>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded text-sm uppercase md:font-Archivo font-bold">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Award;

import React from "react";
import aiIntegration from "../assets/AI-INTEGRATION EXCELLENCE AWARD.png";
import innovativeStartup from "../assets/The Innovative AI-Powered Startup Award.png";
import bestAISolutions from "../assets/Best AI-Powered Solutions for Industry Award.png";
import aiEcosystem from "../assets/The AI Ecosystem Excellence Award.png";

const Award = () => {
  const aiSummitData = {
    title: "Honoring the Excellence within AI Ecosystem",
    summitDetails: {
      description: `In the rapidly evolving landscape of artificial intelligence, recognition and celebration are paramount. As AI continues to redefine industries and shape our world, it's imperative to acknowledge the pioneers, innovators, and visionaries who are driving this technological revolution.`,
      goals: [
        "Inspire Innovation: Highlight groundbreaking AI solutions that are pushing the boundaries of what is possible.",
        "Recognize Excellence: Celebrate the dedication and hard work of the individuals and teams behind these remarkable achievements.",
        "Foster Collaboration: Create a platform for industry leaders to connect, share knowledge, and drive collective progress.",
        "Promote Ethical AI: Recognize organizations committed to responsible and ethical AI development.",
      ],
    },
    reasonsToApply: [
      {
        imgSrc:
          "https://kuber.ventures/wp-content/uploads/2024/09/1.jpg",
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
        imgSrc: aiIntegration,
      },
      {
        title: "The Innovative AI-Powered Startup Award",
        description:
          "This award celebrates the promising startups that are pioneering new frontiers in AI, showcasing their potential to disrupt industries and shape the future.",
        imgSrc: innovativeStartup,
      },
      {
        title: "Best AI-Powered Solutions for Industry Award",
        description:
          "This award honors the most outstanding AI-powered companies and their innovative solutions that are revolutionizing specific industries, boosting efficiency, productivity, and growth.",
        imgSrc: bestAISolutions,
      },
      {
        title: "The AI Ecosystem Excellence Award",
        description:
          "This award recognizes organizations that are driving the growth and development of the AI ecosystem.",
        imgSrc: aiEcosystem,
      },
    ],
  };

  const { title, summitDetails, reasonsToApply, awards } = aiSummitData;

  return (
    <>
      
      <section
        className="h-screen flex justify-left items-top bg-cover bg-center p-8 sm:p-16 md:p-32"
        style={{
          backgroundImage:
            "url('https://media.licdn.com/dms/image/v2/C4D12AQHRdpT3XD12CQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1649787353589?e=1738195200&v=beta&t=QZQxCP6MyIA_UiT9Dpv9z4GcvWlmQTaNoXQInZWMbNs')",
        }}
      >
        <h1 className="md:p-24 p-5 pt-24 md-pt-0 text-3xl md:text-6xl font-Antonio font-semibold text-yellow-400 tracking-wide leading-10  w-1/2  
        ">
          {title}
        </h1>
        
      </section>

      <section className="ps-8 pe-8 py-12 bg-gradient-to-r from-purple-500 to-pink-500 lg:ps-12" >
        
        <p className="text-white text-lg font-Archivo mb-6 ">
          {summitDetails.description}
        </p>
        <ul className="text-white text-lg font-Archivo space-y-2 list-disc pl-5">
          {summitDetails.goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </section>

      
      <section className="p-8 sm:p-12 bg-gradient-to-r from-pink-500 to-purple-500">
        <h2 className="text-center text-2xl sm:text-4xl md:text-5xl uppercase font-Antonio font-bold text-yellow-400 mb-8">
          5 Reasons Why You Should Apply
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasonsToApply.map((reason, index) => (
            <div key={index} className="p-4 bg-white shadow-lg rounded-md">
              <img
                src={reason.imgSrc}
                className="w-full h-40 sm:h-48 object-cover rounded-md"
                alt={reason.title}
              />
              <h3 className="text-lg md:text-xl font-bold mt-4 text-purple-600 font-Archivo">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-8 sm:p-12 bg-gray-100">
        <h2 className="text-center text-2xl sm:text-4xl md:text-5xl uppercase font-Antonio font-bold text-yellow-400 mb-8">
          Our Featured Awards
        </h2>
        <div className="space-y-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center bg-white p-6 sm:p-12 rounded-md shadow-md`}
            >
              <img
                src={award.imgSrc}
                alt={award.title}
                className="w-full sm:w-48 h-48 object-contain rounded-md mb-4 lg:mb-0 flex-1"
              />
              <div className="text-center lg:text-left lg:ml-6 flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                  {award.title}
                </h3>
                <p className=" text-gray-600 text-sm md:text-lg mb-4">
                  {award.description}
                </p>
                <div className="flex flex-row justify-center gap-4 lg:justify-start">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded text-sm uppercase font-bold">
                    Find Details
                  </button>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded text-sm uppercase font-bold">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Award;

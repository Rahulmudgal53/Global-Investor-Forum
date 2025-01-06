import React, { useRef, useEffect } from "react";
import ZeroCostNominationOpen from "../assets/ZeroCostNominationOpen.png";
import PaidNominationOpen from "../assets/PaidNominationOpen.png";
import NominationDeadline from "../assets/NominationDeadline.png";
import ShortlistAnnounced from "../assets/ShortlistAnnounced.png";
import WinnersAnnouncement from "../assets/WinnersAnnouncement.png";
import AwardLogo from "../assets/Award.png";
import Elegibility from "../assets/Elegibility.png";
import NominationFees from "../assets/NominationFees.png";
import EvaluationProcess from "../assets/EvaluationProcess.png";
import Showcase from "../assets/Showcase.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Information = () => {

  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        '.fall-In',
        { opacity: 0, y: -100 }, 
        { opacity: 1, y: 0, duration: 0.7, stagger:0.2,  ease: 'power2.out', scrollTrigger: {
          trigger: ".fall-In",
          start: "top 80%",
          // markers:true,
        }, }
      );

      gsap.fromTo(
        '.climb-In',
        { opacity: 0, y: 100 }, 
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: {
          trigger: ".climb-In",
          start: "top 80%",
          // markers:true,

        }, }
      );

      gsap.fromTo(
        '.slide-to-right',
        { opacity: 0, x: -100 }, 
        { opacity: 1, x: 0, duration: 1,stagger:0.2, ease: 'power2.out', scrollTrigger: {
          trigger: ".slide-to-right",
          start: "top 80%",
          // markers:true,

        }, }
      );

      gsap.fromTo(
        '.slide-to-left',
        { opacity: 0, x: 100 }, 
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out', scrollTrigger: {
          trigger: ".slide-to-left",
          start: "top 80%",
          // markers:true,

        }, }
      );
      

      // gsap.utils.toArray(".ticket-card").forEach((card, index) => {
      //         gsap.fromTo(
      //           card,
      //           { opacity: 0, scale: 0.8 },
      //           {
      //             opacity: 1,
      //             scale: 1,
      //             duration: 1,
      //             stagger: 0.2,
      //             ease: "power3.out",
      //             scrollTrigger: {
      //               trigger: card,
      //               start: "top 90%",
      //               toggleActions: "play none none none",
      //             },
      //           }
      //         );
      //       });

            // gsap.utils.toArray(".additional-info-card").forEach((card, index) => {
            //   gsap.fromTo(
            //     card,
            //     { opacity: 0, scale: 0.8 },
            //     {
            //       opacity: 1,
            //       scale: 1,
            //       duration: 1,
            //       stagger:0.2,
            //       ease: "power3.out",
            //       scrollTrigger: {
            //         trigger: card,
            //         start: "top 90%",
            //         toggleActions: "play none none none",
            //       },
            //     }
            //   );
            // });
    }, containerRef);

    return () => ctx.revert(); // Clean up GSAP context on component unmount
  }, []);

  const InfoData = {
    title: "The AI Integration Excellence Award 2025",
    introduction: {
      content:
        "Artificial intelligence (AI) has rapidly emerged as a driving force behind innovation and progress across various industries. Its transformative potential is reshaping the way we live, work, and interact with the world. From healthcare and finance to manufacturing and transportation, AI is revolutionizing how businesses operate and delivering unprecedented value. Recognizing the profound impact of AI, we are proud to introduce The AI Integration Excellence Award at the Global AI Summit, the world's largest AI event.",
      focus_areas: [
        {
          title: "Successful AI Integration",
          description:
            "Successfully incorporated AI into their daily operations, products, or services.",
        },
        {
          title: "Created AI-Driven Solutions",
          description:
            "Developed groundbreaking AI-powered tools that solve real-world problems.",
        },
        {
          title: "AI Adoption Promotion",
          description:
            "Actively promoted the use of AI through their work, initiatives, or advocacy.",
        },
      ],
    },
    eligibility: {
      awardName: "The AI Integration Excellence Award",
      criteria: [
        {
          title: "AI Integration",
          description:
            ": The nominee must have successfully integrated AI into their business operations, models, or offerings. This could include developing AI-powered products, services, or solutions, or using AI to enhance existing processes.",
        },
        {
          title: "Demonstrated Impact",
          description:
            ": The nominee must be able to demonstrate a significant positive impact of their AI integration. This could include increased efficiency, cost savings, improved customer satisfaction, or contributions to social or environmental goals.",
        },
        {
          title: "Innovation",
          description:
            ": The nominee must have demonstrated a high level of innovation in their AI integration. This could involve pioneering new AI applications, developing unique AI algorithms, or adopting cutting-edge AI technologies.",
        },
        {
          title: "Ethical Considerations",
          description:
            ": The nominee must have demonstrated a commitment to ethical AI practices. This could include adhering to AI principles, ensuring fairness and transparency, and mitigating potential biases.",
        },
        {
          title: "Data Privacy and Security",
          description:
            ": The company must prioritize data privacy and security in the development and deployment of their AI solution.",
        },
        {
          imgSrc: Elegibility,
        },
      ],
    },
    categories: {
      description:
        "Our comprehensive list of categories encompasses a wide range of industries and applications, ensuring that every AI-powered company has a chance to be recognized for their exceptional contributions.",
      core_industries: [
        "Healthcare",
        "Pharmaceutical",
        "Energy",
        "BFSI",
        "Education",
        "Agriculture",
        "Foodtech",
        "Retail",
        "E-commerce",
        "Transportation",
        "Automobile",
        "Manufacturing",
        "Generative AI",
        "Customer Service",
        "Marketing",
        "Human Resources",
        "Logistics",
        "Supply Chain",
        "Government",
        "Cybersecurity",
        "Robotics",
        "Space",
        "Environment",
        "Maritime",
        "Media & Communication",
        "Others",
      ],
      emerging_fields: [
        "AI for Social Good",
        "AI for Sustainability",
        "AI for Ethics and Governance",
        "AI for Startups and Entrepreneurs",
        "AI for General Innovation",
      ],
      additional_info:
        "We are continuously expanding our categories to reflect the dynamic nature of the AI landscape. Our team is dedicated to identifying emerging trends and specialized areas within the industry to ensure that every AI-powered company has the opportunity to be recognized. By participating in The AI Integration Excellence Award, you are not only vying for recognition but also contributing to a vibrant ecosystem of AI innovation and progress.",
      example: "The AI Integration Excellence in Healthcare - Award",
    },
    required_information: {
      description:
        "To ensure a comprehensive evaluation of your organization's AI initiatives, please provide the following information:",
      details: [
        {
          title: "Organization Profile : ",
          description:
            "A brief overview of the organization, its mission, and its core business activities.",
        },
        {
          title: "AI Integration Initiatives : ",
          description:
            "A detailed description of the organization's AI initiatives, including specific projects, products, or services that leverage AI.",
        },
        {
          title: "Industry Impact : ",
          description:
            "Explain how your AI-integrated solutions contribute positively to a specific industry or sector. Highlight measurable improvements—such as enhanced operational efficiency, cost savings, environmental sustainability, or improved customer outcomes—resulting from your AI applications.",
        },
        {
          title: "Ethical Considerations : ",
          description:
            "Evidence of the organization's commitment to ethical AI practices, including data privacy, fairness, and transparency.",
        },
      ],
    },
    supporting_documentation: {
      description:
        "Along with the completed nomination form, please submit any relevant supporting documentation, such as:",
      examples: [
        "White papers, case studies, or technical reports detailing the organization's AI projects.",
        "Press releases, news articles, or media coverage highlighting your organization's AI achievements.",
        "Industry recognition awards, honors, or certifications received for your AI innovations.",
        "Customer testimonials or case studies highlighting the benefits of the organization's AI solutions.",
      ],
    },
    evaluation_process: {
      imgSrc: EvaluationProcess,
      criteria: [
        "The Global Investors Forum team will carefully evaluate all submitted nominations. The winners will be selected based on a comprehensive assessment of the provided information.",
        "To ensure a fair and transparent evaluation process, we have established an Internal Expert Committee comprised of highly qualified professionals with extensive expertise in the field of AI.",
        "This committee will carefully review all nominations based on predefined criteria to select the award winners. Their decision will be final.",
        "The Awards Management team reserves the right to modify these criteria to maintain fairness and accuracy.",
      ],
    },
    fees: {
      imgSrc: NominationFees,
      description:
        "To encourage participation and recognize the significant contributions of AI innovators, we are offering 0% nomination fees until deadline. However, to maintain the sustainability and quality of the awards program, we will be introducing a nominal nomination fee after the deadline.",
    },
    timelines: [
      {
        imgSrc: ZeroCostNominationOpen,
        event: "Zero Cost Nomination Open",
        date: "December 1, 2024",
      },
      {
        imgSrc: PaidNominationOpen,
        event: "Paid Nomination Open",
        date: "January 15, 2025",
      },
      {
        imgSrc: NominationDeadline,
        event: "Nomination Deadline",
        date: "February 15, 2025",
      },
      {
        imgSrc: ShortlistAnnounced,
        event: "Shortlist Announced",
        date: "March 15, 2025",
      },
      {
        imgSrc: WinnersAnnouncement,
        event: "Winners Announcement",
        date: "May 2, 2025",
      },
    ],
    winning: {
      description:
        "Should your nomination be selected as a winner, you will receive:",
      benefits: [
        {
          title: "Award Announcement",
          description:
            "The winners of The AI Integration Excellence award will be announced during the prestigious awards ceremony at the Global AI Summit.",
        },
        {
          title: "A Personalized Trophy",
          description:
            "A unique trophy recognizing your organization’s outstanding achievement in AI integration.",
        },
        {
          title: "Digital Logo",
          description:
            "A high-resolution digital logo for royalty-free use in online and print materials.",
        },
        {
          title: "Press Release",
          description:
            "A professionally written press release announcing your win, issued by the Global Investors Forum.",
        },
        {
          title: "Press Release Template",
          description:
            "A customizable press release template for your organization to share the news with your audience.",
        },
        {
          title: "Community Recognition",
          description:
            "Recognition on the Global Investors Forum’s website and social media channels, reaching a global audience of 80,000+ AI enthusiasts and industry leaders.",
        },
        {
          title: "Exclusive Opportunities",
          description:
            "Special opportunities to connect with industry peers, investors, and potential partners.",
        },
      ],
    },
    tips: [
      {
        title: "Clear and Concise :",
        description: " Use simple language and avoid technical jargon.",
      },
      {
        title: "Strong Writing :",
        description: " Ensure correct grammar and spelling.",
      },
      {
        title: "Relatable Content :",
        description: " Present ideas in a way that's easy to understand.",
      },
    ],

    Showcases: {
      imgSrc: Showcase,
      showcase: [
        {
          title: "User-Friendly Website :",
          description:
            " Ensure ease of navigation and highlight key achievements.",
        },
        {
          title: "Engaging Content : ",
          description: "Use videos, infographics, or other visual aids.",
        },
        {
          title: "Clear Messaging :",
          description:
            " Clearly communicate your nomination's purpose and value proposition.",
        },
      ],
    },
  };

  const {
    title,
    introduction,
    eligibility,
    categories,
    required_information,
    supporting_documentation,
    evaluation_process,
    fees,
    timelines,
    winning,
    tips,
    Showcases,
  } = InfoData;
  return (
    <div ref={containerRef} className=" text-lg font-Archivo bg-gradient-to-r from-pink-700 to-purple-700">
      {/* Header */}
      <section
 className=" flex flex-col ">
        <div className="flex flex-col lg:flex-row">
          <div
            className=" fall-In flex flex-col gap-3 p-12 items-start justify-end flex-1 bg-cover bg-center sm:p-16 lg:p-12"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-photo/computer-chip-processor-motherboard-glows-blue-artificial-intelligence-graphics-chip-mining-digital-technologies-network-security-3d-render_91497-10687.jpg')",
            }}
          >
            <div className="slide-to-right flex pt-24 pb-4 px-4">
              <div className=" relative flex items-center w-44 h-44 rounded bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center transform  lg:scale-100">
                <p className="px-6  text-xl text-white font-Archivo font-bold">
                  The AI Integration Excellence Award
                </p>
                <div className="brightness-120 absolute -top-16 -left-8 w-20">
                  <img src={AwardLogo} alt="Award logo" />
                </div>
              </div>
            </div>
            <button className="bg-yellow-500 text-sm text-white py-2 px-4 rounded ml-4 hover:bg-yellow-600">
              Apply Now
            </button>
          </div>

          {/* Introduction */}
          <div  className=" w-full lg:w-3/5 p-6 lg:p-20 flex-col py-12">
            <h2 className="fall-In text-3xl lg:text-5xl font-Antonio uppercase font-semibold text-yellow-500 mb-4">
              Introduction
            </h2>
            <p className="fall-In pt-2 text-lg font-Archivo text-white mb-6 ">
              {introduction.content}
            </p>
            <p className="fall-In text-lg font-Archivo text-white mb-6 ">
              The AI Integration Excellence Award will be bestowed upon
              organizations that have demonstrated exceptional achievements in
              the following areas:
            </p>
            <ul className="text-lg font-Archivo text-white space-y-2 list-disc pl-5 pb-6">
              {introduction.focus_areas.map((goal, index) => (
                <li key={index} className="slide-to-right">
                  <span className=" font-bold">{goal.title} : </span>
                  {goal.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div  className="bg-yellow-400 flex flex-col items-center">
          <h2 className="text-5xl lg:text-7xl -my-8 p-6 rounded-xl bg-yellow-400 font-Antonio uppercase pb-6 font-semibold text-blue-700 text-center">
            Timelines
          </h2>
          <div className="flex w-full p-12 flex-wrap gap-4">
            {timelines.map((timeline, index) => (
              <ul
                key={index}
                className=" flex flex-col flex-1 sm:items-center px-4 "
              >
                <li className="flex justify-center">
                  <img src={timeline.imgSrc} className="h-20 " alt="" />
                </li>
                <li className="font-bold text-center">{timeline.event}</li>
                <li className="text-center">{timeline.date}</li>
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className=" bg-gray-100 pt-8 px-6 lg:px-20">
        <h2 className="text-5xl lg:text-7xl font-Antonio uppercase font-semibold text-yellow-500 mb-4">
          Eligibility
        </h2>
        <p className="  text-gray-800 mb-6">
          To be considered for{" "}
          <span className="text-yellow-500 font-bold">
            The AI Integration Excellence Award,
          </span>
          applicants must meet the following criteria:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eligibility.criteria.map((item, index) => (
            <ul key={index} className="flex flex-col pl-4">
              {item.description && (
                <li className="  list-disc text-gray-700">
                  <span className=" font-bold text-gray-900">{item.title}</span>
                  {item.description}
                </li>
              )}

              {item.imgSrc && (
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="h-full max-h-30 pr-4 border-separate border-blue-500 border-r-8 brightness-120 z-10 object-contain object-left"
                />
              )}
            </ul>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section  className="py-8 mx-6 lg:mx-20">
        <h2 className="text-5xl underline-animated lg:text-7xl font-Antonio uppercase font-semibold text-yellow-500 mb-6">
          Categories
        </h2>
        <p className="text-white max-w-2xl mb-8">
          Our comprehensive list of categories encompasses a wide range of
          industries and applications, ensuring that every AI-powered company
          has a chance to be recognized for their exceptional contributions.
          Some of our core industries are:
        </p>

        <div className="flex flex-wrap  justify-between ">
          <div className="flex flex-wrap gap-4 max-w-4xl">
            {categories.core_industries.map((category) => (
              <div
                key={category}
                className="bg-white shadow-lg rounded-lg py-2 px-4 text-center text-gray-700 font-medium hover:bg-yellow-500 hover:text-white transition"
              >
                {category}
              </div>
            ))}
          </div>

          <div className="w-full pt-8 lg:w-auto flex flex-col gap-4">
            <h3 className="text-4xl font-bold text-white text-center lg:text-left">
              Emerging Fields
            </h3>
            <ul className="list-disc rounded-lg pl-4">
              {categories.emerging_fields.map((category) => (
                <li
                  key={category}
                  className="text-white font-medium py-1  last:border-none hover:text-gray-100"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 max-w-4xl text-white">
          <p className="mb-4">
            <span className="font-bold text-white">Example:</span>{" "}
            {categories.example}
          </p>
          <p>{categories.additional_info}</p>
        </div>
      </section>

      {/* Nomination Process */}
      <section  className="lg:h-screen flex flex-col bg-gray-100 lg:flex-row ">
        <div className=" bg-[url('https://www.madisonlogic.com/wp-content/uploads/2022/07/Blog-Image48.png')] bg-cover bg-bottom flex flex-1 items-end ">
          <div className="w-full h-full flex flex-row items-end bg-gradient-to-b from-black/0 to-black/100">
            <h2 className="text-5xl lg:text-7xl font-Antonio uppercase font-semibold text-yellow-500 pt-40 p-6 lg:pl-20 lg:pb-20  ">
              The Nomination Process
            </h2>
          </div>
        </div>
        <div className="text-xl my-auto flex-1 py-8 px-6 lg:px-12">
          <p className="lg:px-8 pt-4">
            All information submitted as part of the nomination process will be
            treated with the utmost{" "}
            <span className="font-bold">confidentiality.</span> Neither the
            nomination itself nor any of its content will be shared with anyone
            outside of our staff and the expert panel. This ensures the privacy
            and integrity of all submissions. We understand that you may have
            sensitive information within your nomination. Rest assured that your
            data will be handled securely and used solely for the purpose of
            evaluating your nomination and selecting award winners.
          </p>
          <ul className="pl-4 list-disc mt-4 ">
            <li className="lg:mx-8">
              Visit our official website or you can submit your nomination via
              email to{" "}
              <span className="text-yellow-500 font-semibold">
                {" "}
                info@global-investors-forum.com{" "}
              </span>{" "}
              for initial screening.
            </li>
            <li className="lg:mx-8">
              Submit required documentation and supporting materials.
            </li>
            <li className=" lg:mx-8">
              Ensure submission is received by the deadline.
            </li>
          </ul>
        </div>
      </section>

      {/* Required Information */}
      <section className="flex flex-col gap-12 py-8 px-6 text-white lg:flex-row lg:px-20">
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-3xl lg:text-5xl font-Antonio uppercase text-yellow-500">
            ReQuired Information
          </h2>
          <p>{required_information.description}</p>
          <div className="">
            {required_information.details.map((detail, index) => (
              <ul key={index} className="py-1 pl-4">
                <li className="list-disc ">
                  <span className="font-bold">{detail.title}</span>
                  {detail.description}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1 ">
          <h2 className=" text-3xl lg:text-5xl font-Antonio uppercase text-yellow-500">
            Supporting Documentation
          </h2>
          <p>{supporting_documentation.description}</p>
          <div>
            {supporting_documentation.examples.map((example, index) => (
              <ul key={index} className="py-1 pl-4">
                <li className="list-disc">{example}</li>
              </ul>
            ))}
          </div>
          <button className="m-auto py-2 px-4 rounded-md bg-yellow-500">
            Apply Now
          </button>
        </div>
      </section>

      {/* Evaluation process */}
      <section className="pt-8 flex flex-col gap-12 text-white 2xl:flex-row lg:pl-20">
        <div className="flex flex-1 flex-col md:flex-row">
          <div
            className="flex pb-0 px-6 flex-1 flex-col gap-2 lg:pl-0 "
            // style={{ backgroundImage: `url(${evaluation_process.imgSrc})` }}
          >
            <h2 className="text-3xl pb-4 lg:text-5xl font-Antonio uppercase text-yellow-500">
              Evaluation Process
            </h2>
            {evaluation_process.criteria.map((list, index) => (
              <ul key={index} className="pl-4 ">
                <li className="list-disc lg:text-xl ">{list}</li>
              </ul>
            ))}
          </div>
          <div className="flex flex-col justify-center">
            <img
              className="h-full object-cover"
              src={evaluation_process.imgSrc}
              alt=""
            />
          </div>
        </div>

        <div className=" flex-1 ">
          <h2 className="text-3xl px-6 pb-4 lg:text-5xl lg:pl-0 font-Antonio uppercase text-yellow-500">
            Nomination Fees
          </h2>
          <div className="flex flex-col gap-4 md:flex-row">
            <p className="px-6 lg:pl-0 lg:text-xl">{fees.description}</p>
            <img src={fees.imgSrc} className="" alt="Photo AAVEgi" />
          </div>
        </div>
      </section>

      {/* Winning */}
      <section className="flex flex-col bg-gray-100  lg:flex-row ">
        <div className="flex flex-col py-8 flex-1 gap-4">
          <h2 className="text-5xl pl-6 lg:text-7xl lg:pl-20 font-Antonio uppercase text-yellow-500 ">
            Winning
          </h2>

          <p className=" text-xl pl-6 lg:pl-20">
            Should your{" "}
            <span className="text-yellow-500 font-bold">
              nomination be selected as a winner,
            </span>{" "}
            you will receive:
          </p>
          <div className="flex pl-6 flex-col gap-2 lg:pl-20">
            {winning.benefits.map((benefit, index) => (
              <ul key={index} className=" list-disc pl-4">
                <li>
                  <span className="font-bold">{benefit.title} : </span>
                  {benefit.description}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <img
          className="lg:w-1/3 object-cover object-right border-yellow-500 border-l-8"
          src="https://media.licdn.com/dms/image/v2/C4D12AQHRdpT3XD12CQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1649787353589?e=1738195200&v=beta&t=QZQxCP6MyIA_UiT9Dpv9z4GcvWlmQTaNoXQInZWMbNs"
          alt="cover-image"
        />
      </section>

      {/* Tips and Showcases */}
      <section className="flex flex-col gap-8 text-white py-12 ">
        <h2 className="text-5xl px-6 lg:text-7xl lg:px-20 font-Antonio uppercase text-yellow-500">
          Tips to Submit a Winning Profile
        </h2>

        {/* First Section */}
        <div className="flex flex-col md:flex-row-reverse gap-8 justify-between">
          <img
            src="https://propulsionquebec.com/wp-content/uploads/2023/06/image-ambition-atouts-580x435.jpg"
            className="w-full max-w-md rounded-l-3xl shadow-lg lg:w-1/2 "
            alt="Winning Profile Tips"
          />
          <div className="flex flex-col gap-4 px-6 lg:pl-20 ">
            <h3 className="font-Antonio text-3xl lg:text-4xl uppercase text-yellow-500">
              Tell a Compelling Story:
            </h3>
            <div>
              {tips.map((tip, index) => (
                <ul className="text-lg lg:text-xl" key={index}>
                  <li className="mb-2">
                    <span className="font-bold">{tip.title}</span>{" "}
                    {tip.description}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <img
            src={Showcases.imgSrc}
            className="w-full max-w-md rounded-r-3xl shadow-lg lg:w-1/2 object-cover"
            alt="Showcase Image"
          />
          <div className="flex flex-col gap-4 px-6 lg:px-20 lg:w-1/2">
            <h3 className="font-Antonio text-3xl lg:text-4xl uppercase text-yellow-500">
              Showcase Your Work:
            </h3>
            <div>
              {Showcases.showcase.map((cases, index) => (
                <ul className="text-lg lg:text-xl" key={index}>
                  <li className="mb-2">
                    <span className="font-bold">{cases.title}</span>{" "}
                    {cases.description}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Information;

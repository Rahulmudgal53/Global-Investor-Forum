import './App.css'

function App() {

  const data=[{
    "title": "VIP_PACKAGE",
    "original_price": "$2899",
    "discounted_price": "$1299",
    "features": [
      "Fast track badge pickup",
      "Access to Main stage, Tracks and Workshops",
      "Reserved front row seats in all conference rooms",
      "Complimentary lunch",
      "Tea and coffee included",
      "24/7 customer service",
      "Access to AI powered event networking app",
      "Access to all post event material including speaker slides & videos on demand (subject to speaker consent) for 30 days",
      "Earn CPD points (Continuing Professional Development)"
    ]
  },
  {
    "title": "EXPO_AND_CONTENT",
    "original_price": "$1279",
    "discounted_price": "$249",
    "features": [
      "Access to the expo area",
      "Access to Main stage, Tracks and Workshops",
      "Access to AI powered event networking app",
      "Access to all post event material including speaker slides & videos on demand (subject to speaker consent) for 30 days",
      "Earn CPD points (Continuing Professional Development)",
      "Tea and coffee included"
    ]
  },
  {
    "title": "EXPO_ONLY",
    "original_price": "$1019",
    "discounted_price": "$149",
    "features": [
      "Access to the expo area only",
      "Access to AI powered event networking app"
    ]
  },
  {
    "title": "VENDORS",
    "original_price": "$2099",
    "discounted_price": "$1499",
    "features": [
      "Physical access to 2 days of World Summit AI MENA",
      "Access to all stages, workshops and exhibition areas",
      "Access to AI powered event networking app",
      "All post event material including speaker slides & videos on demand (subject to speaker consent)"
    ]
  }
  ]

  return (
    <div className="ticket-page">
      <div className="ticket-banner"><h2>AI Conference </h2>Tickets</div>
      <div className="tickets">
        {data.map((ticket,index)=>{
          return <div className="ticket-card" key={index}>
              <h2>{ticket.title.replace(/_/g, " ")}</h2>
              <span>{ticket.original_price}</span>
              <p>{ticket.discounted_price}</p>

              {ticket.features?.map((feature,i)=>{

                return <ul key={i}>
                  <li>{feature}</li>
                </ul>
              })}
              <button>Book Now</button>

            </div>
        })}

      </div>

      <h2>STARTUP, ACADEMIC, STUDENT, CHARITY & ASSOCIATION</h2>

       <div className="discount-section">
         <hr />
         <p>50% Off</p>
         <ul>
           <li>Contact us to get 50% off EXPO ONLY and EXPO AND CONTENT tickets.</li>
         </ul>
         <button>Contact Us</button>
         <hr />
       </div>

      <footer>
        {/* <p>footer content overhere</p> */}
      </footer>

    </div>
  )
}

export default App

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const data = [
//     {
//       title: "VIP_PACKAGE",
//       original_price: "$2899",
//       discounted_price: "$1299",
//       features: [
//         "Fast track badge pickup",
//         "Access to Main stage, Tracks and Workshops",
//         "Reserved front row seats in all conference rooms",
//         "Complimentary lunch",
//         "Tea and coffee included",
//         "24/7 customer service",
//         "Access to AI powered event networking app",
//         "Access to all post event material including speaker slides & videos on demand (subject to speaker consent) for 30 days",
//         "Earn CPD points (Continuing Professional Development)",
//       ],
//     },
//     {
//       title: "EXPO_AND_CONTENT",
//       original_price: "$1279",
//       discounted_price: "$249",
//       features: [
//         "Access to the expo area",
//         "Access to Main stage, Tracks and Workshops",
//         "Access to AI powered event networking app",
//         "Access to all post event material including speaker slides & videos on demand (subject to speaker consent) for 30 days",
//         "Earn CPD points (Continuing Professional Development)",
//         "Tea and coffee included",
//       ],
//     },
//     {
//       title: "EXPO_ONLY",
//       original_price: "$1019",
//       discounted_price: "$149",
//       features: [
//         "Access to the expo area only",
//         "Access to AI powered event networking app",
//       ],
//     },
//     {
//       title: "VENDORS",
//       original_price: "$2099",
//       discounted_price: "$1499",
//       features: [
//         "Physical access to 2 days of World Summit AI MENA",
//         "Access to all stages, workshops and exhibition areas",
//         "Access to AI powered event networking app",
//         "All post event material including speaker slides & videos on demand (subject to speaker consent)",
//       ],
//     },
//   ];

//   return (
//     <div className="ticket-page">
//       <h2>Tickets</h2>
//       <div className="tickets-container">
//         {data.map((ticket, index) => {
//           return (
//             <div className="ticket-card" key={index}>
//               <h2>{ticket.title.replace(/_/g, " ")}</h2>
//               <span>{ticket.original_price}</span>
//               <p>{ticket.discounted_price}</p>
//               <ul>
//                 {ticket.features?.map((feature, i) => (
//                   <li key={i}>{feature}</li>
//                 ))}
//               </ul>
//               <button>Book Now</button>
//             </div>
//           );
//         })}
//       </div>

//       <h2>STARTUP, ACADEMIC, STUDENT, CHARITY & ASSOCIATION</h2>

//       <div className="discount-section">
//         <hr />
//         <p>50% Off</p>
//         <ul>
//           <li>Contact us to get 50% off EXPO ONLY and EXPO AND CONTENT tickets.</li>
//         </ul>
//         <button>Contact Us</button>
//         <hr />
//       </div>

//       <footer>
//          {/* <p>footer content overhere</p> */}
//        </footer>
//     </div>
//   );
// }

// export default App;

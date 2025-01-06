// import './App.css'
import Award from './Components/Award'
import Ticket from './Components/Ticket'
import Information from './Components/Information'
import Pass from "./Components/Pass";
import Pass2 from './Components/Pass2';
import Attendees from './Components/Attendees';
import AttendeeDetails from './Components/AttendeeDetails';
import Company from './Components/Company';
import {Route, Routes } from 'react-router-dom';
function App() {

  return(
    // <>
      // <Award/>
    //   <Attendees/>
    //   <AttendeeDetails/>
    //   <Pass/>
    //   {/* <Pass2/> */}
    //   <Information/>
    //   {/* <Ticket/> */}
    // </>
    <>
      {/* <Company/> */}
      <Award/>
      {/* <Pass/> */}
      {/* <Attendees/> */}

      {/* <Routes>
        <Route path="/" element={<Attendees />} />
        <Route path="/attendee/:id" element={<AttendeeDetails />} />
      </Routes> */}
      <Information/>
    </>
  )
}

export default App

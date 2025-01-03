// import './App.css'
import Award from './Components/Award'
import Ticket from './Components/Ticket'
import Information from './Components/Information'
import Pass from "./Components/Pass";
import Pass2 from './Components/Pass2';
import Attendees from './Components/Attendees';
import AttendeeDetails from './Components/AttendeeDetails';
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
      <Award/>
      <Pass/>
      <Information/>

      <Routes>
        <Route path="/" element={<Attendees />} />
        <Route path="/attendee/:id" element={<AttendeeDetails />} />
      </Routes>
    </>
  )
}

export default App

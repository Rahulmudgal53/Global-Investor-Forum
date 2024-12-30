// import './App.css'
import Award from './Components/Award'
import Ticket from './Components/Ticket'
import Information from './Components/Information'
import Pass from "./Components/Pass";
import Pass2 from './Components/Pass2';
import Attendees from './Components/Attendees';
import AttendeeDetails from './Components/AttendeeDetails';
function App() {

  return(
    <>
      <Award/>
      <Attendees/>
      <AttendeeDetails/>
      <Pass/>
      {/* <Pass2/> */}
      <Information/>
      {/* <Ticket/> */}
    </>
  )
}

export default App

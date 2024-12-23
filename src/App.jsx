// import './App.css'
import Award from './Components/Award'
import Ticket from './Components/Ticket'
import Information from './Components/Information'
import Pass from "./Components/Pass";
import Pass2 from './Components/Pass2';
import Attendees from './Components/Attendees';
function App() {

  return(
    <>
      <Award/>
      <Attendees/>
      <Pass/>
      {/* <Pass2/> */}
      <Information/>
      {/* <Ticket/> */}
    </>
  )
}

export default App

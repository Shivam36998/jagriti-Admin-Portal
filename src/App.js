import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaForm from "./pages/CAForm/CaForm";
import HomePage from "./pages/HomePage/HomePage";
import Newsletter from "./pages/Newsletter/Newsletter";
import Users from "./pages/Users/Users";
import UEvent from "./pages/Users/UEvent";
import UPreEvent from "./pages/Users/UPreEvent";
import UGuestTalk from "./pages/Users/UGuestTalk";
import Events from "./pages/Events/Events";
import PreEvents from "./pages/PreEvents/PreEvents";
import GuestTalks from "./pages/GuestTalks/GuestTalks";
import AddEvent from "./pages/Events/AddEvent";
import EditEvent from "./pages/Events/EditEvent";
import EParticipant from "./pages/Events/EParticipants";
import AddGuestTalk from "./pages/GuestTalks/AddGuestTalk";
import EditGuestTalk from "./pages/GuestTalks/EditGuestTalk";
import GParticipants from "./pages/GuestTalks/GParticipants";
import AddPreEvent from "./pages/PreEvents/AddPreEvent";
import EditPreEvent from "./pages/PreEvents/EditPreEvent";
import PParticipants from "./pages/PreEvents/PParticipants";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<HomePage />} />
          <Route exact path="/ca" element={<CaForm />} />
          <Route exact path="/newsletter" element={<Newsletter />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/preevents" element={<PreEvents />} />
          <Route exact path="/guesttalks" element={<GuestTalks />} />
          <Route exact path="/addevent" element={<AddEvent />} />
          <Route exact path="/editevent" element={<EditEvent />} />
          <Route exact path="/eparticipants" element={<EParticipant />} />
          <Route exact path="/addguesttalk" element={<AddGuestTalk />} />
          <Route exact path="/editguesttalk" element={<EditGuestTalk />} />
          <Route exact path="/gparticipants" element={<GParticipants />} />
          <Route exact path="/addpreevent" element={<AddPreEvent />} />
          <Route exact path="/editpreevent" element={<EditPreEvent />} />
          <Route exact path="/pparticipants" element={<PParticipants />} />
          <Route exact path="/uevent" element={<UEvent />} />
          <Route exact path="/upreevent" element={<UPreEvent />} />
          <Route exact path="/uguesttalk" element={<UGuestTalk />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Roster from "./pages/Roster";
import Schedule from "./pages/Schedule";
import AboutUS from "./pages/AboutUS";
import ContactUs from "./pages/ContactUs";
import EditRoster from "./pages/EditRoster";
import EditSchedule from "./pages/EditSchedule";
function App() {
  return (
    <>
      <Box minH="100vh">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about-us" element={<AboutUS />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/edit-schedule" element={<EditSchedule />} />
          <Route path="/edit-roster" element={<EditRoster />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;

import { Routes, Route, HashRouter } from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";
import { Events } from "./Events";
import { Forum } from "./Forum";
import { Home } from "./Home";
import { JoinClub } from "./JoinClub";
import { NoPage } from "./NoPage";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="RS_Freaks/" element={<Home />} />
      <Route path="RS_Freaks/Home" element={<Home />} />
      <Route path="RS_Freaks/About" element={<About />} />
      <Route path="RS_Freaks/Events" element={<Events />} />
      <Route path="RS_Freaks/Forum" element={<Forum />} />
      <Route path="RS_Freaks/Contact" element={<Contact />} />
      <Route path="RS_Freaks/JoinClub" element={<JoinClub />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

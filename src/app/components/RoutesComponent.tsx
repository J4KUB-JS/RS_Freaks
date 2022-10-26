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
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Forum" element={<Forum />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/JoinClub" element={<JoinClub />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import Board from "./components/board/Board.tsx";
import Mission from "./components/Mission.tsx";
import Events from "./components/events/Events.tsx";
import Ensemble from "./components/ensemble/Ensemble.tsx";
import Support from "./components/Support.tsx";
import Join from "./components/join/Join.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/board" element={<Board />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ensemble" element={<Ensemble />} />
        <Route path="/support" element={<Support />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

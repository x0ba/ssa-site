import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import Board from "./components/Board.tsx";
import Mission from "./components/Mission.tsx";
import Events from "./components/Events.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/board" element={<Board />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

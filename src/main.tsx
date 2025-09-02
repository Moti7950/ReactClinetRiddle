import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";

// import page file 
import LiginPage from "./page/Ligin.Page.tsx"
import SiginPage from "./page/sigin.Page.tsx"
import Menu from "./page/Menu.page.tsx"
import LeaderbordPage from "./page/Leaderbord.Page.tsx"
import RiddlePage from "./page/Riddle.Page.tsx"
import AdminPage from "./page/Admin.Page.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LiginPage/>}/>
        <Route path="/sigin" element={<SiginPage/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Leaderbord" element={<LeaderbordPage/>}/>
        <Route path="Riddle" element={<RiddlePage/>}/>
        <Route path="AdminPage" element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { VidaApp } from "@/components/vida/VidaApp";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VidaApp />
  </StrictMode>
);

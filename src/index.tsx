import React from "react";
import { Application } from "./components/Application";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <Application />
);

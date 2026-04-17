import { createRoot } from "react-dom/client";
import "./styles/variables.css"; // ← import the CSS file here
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>,
);

import { createRoot } from "react-dom/client";
import "./app/index.css";
import { Layout } from "./pages/layout"; 



const rootElement = document.getElementById("root") as HTMLElement
const root = createRoot(rootElement)

root.render(<Layout />);

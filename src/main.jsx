import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextApp from "./ContextApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ContextApp>
        <App />
    </ContextApp>
);

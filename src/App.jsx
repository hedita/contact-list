import ReactDOM from "react-dom/client";
import ContactList from "./ContactList";

const App = () => {
  return <ContactList />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

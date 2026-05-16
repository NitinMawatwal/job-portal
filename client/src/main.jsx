import { BrowserRouter } from "react-router-dom";
import { StrictMode, createContext, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Context.Provider value={{ isAuthorized, setIsAuthorized, user, setUser }}>
      {children}
    </Context.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>
);

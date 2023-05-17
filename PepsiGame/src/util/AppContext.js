import { createContext } from "react";

// When want to use repository, call usercontext (warehouse management).
export const AppContext = createContext();

// Create warehouse
export const AppContextProvider = (props) => {
  const { children } = props;
  // General usage data
  const [confirm, setConfirm] = useState(null);
  return (
    <AppContext.Provider value={{ confirm, setConfirm }}>
      {children}
    </AppContext.Provider>
  );
}
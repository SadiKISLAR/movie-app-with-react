import React, { useEffect } from "react";
import { userObserver } from "./auth/firebase";
import AuthContextProvider from "./context/AuthContextProvider";
import Register from "./pages/Register";
import AppRouter from "./router/AppRouter";

const App = () => {

  useEffect(() => {
    userObserver()
  }, [])

  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
};

export default App;

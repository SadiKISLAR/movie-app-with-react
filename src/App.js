import React from "react";
import AuthContextProvider from "./context/AuthContextProvider";
import Register from "./pages/Register";
import AppRouter from "./router/AppRouter";

const App = () => {


  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
};

export default App;

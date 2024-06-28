import React from "react";
import "./index.css";
import Login from "./pages/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";

import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./contexts/AuthContext.jsx";
import ProtectedRouted from "./components/ProtectedRouted.jsx";
import NotFound from "./components/NotFound.jsx";

const App = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        {/* only render child route if isAuthenticated=true */}
        <Route
          element={
            <ProtectedRouted
              isAuthenticated={authUser ? true : false}
              redirectTo={"/login"}
            />
          }
        >
          <Route path="/" element={<Home />} />
        </Route>
        {/* only render these routes if user not authenticated */}
        <Route
          element={
            <ProtectedRouted
              isAuthenticated={authUser ? false : true}
              redirectTo={"/"}
            />
          }
        >
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;

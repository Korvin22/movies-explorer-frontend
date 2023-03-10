import React from "react";
import { Route, Navigate } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Navigate to="/signin" />
      }
    </Route>
  );
};

export default ProtectedRoute; 

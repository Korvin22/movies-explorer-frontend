import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import { useCallback, useEffect, useState } from "react";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin() {
    setLoggedIn(true);
  }
  return (
    <div className="app">
      <div className="app__container">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route
            path="/signin"
            element={<Login handleLogin={handleLogin} loggedIn={loggedIn} />}
          />
          <Route path="/signup" element={<Register />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

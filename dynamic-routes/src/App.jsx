import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx";
import Profile from "./pages/profile.jsx";
import Animals from "./pages/Animals.jsx";
import UserPostsPage from "./pages/userposts.jsx";
import UserLikesPage from "./pages/userlikes.jsx";
import SortOrderForm from "./pages/sortform.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home </Link>
          <Link to="profile">Profile </Link>
          <Link to="Animals">Animals </Link>
          <Link to="sort">SortForm</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:username" element={<Profile />}>
            <Route path="posts" element={<UserPostsPage />} />
            <Route path="likes" element={<UserLikesPage />} />
          </Route>
          <Route path="sort" element={<SortOrderForm />} />
          <Route path="/Animals" element={<Animals />} />
        </Routes>
        <footer>&copy;2024</footer>
      </BrowserRouter>
    </>
  );
}

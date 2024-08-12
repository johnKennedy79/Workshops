import { Link, Outlet, useParams } from "react-router-dom";

export default function Profile() {
  let { username } = useParams();
  return (
    <>
      <h1>Welcome {username}</h1>
      <Link to={`/profile/${username}`}>Users Profile</Link>
      <Link to={`/profile/${username}/posts`}>User Posts</Link>
      <Link to={`/profile/${username}/likes`}>User Likes</Link>
      <Outlet />
      <p>
        The : in front of username in the route means that it dynamic add a
        /username in the url to complete the url{" "}
      </p>
    </>
  );
}

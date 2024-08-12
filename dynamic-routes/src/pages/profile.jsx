import { Link, Outlet, useParams } from "react-router-dom";

export default function Profile() {
  let { username } = useParams();
  return (
    <>
      <div className="subhead">
        <Link to={`/profile/${username}`}>Profile Page</Link>
        <Link to={`/profile/${username}/posts`}>Posts</Link>
        <Link to={`/profile/${username}/likes`}>Likes</Link>
        <Outlet />
      </div>
      <h1>Welcome {username} This is your Profile</h1>
      <p>
        The : in front of username in the route means that it dynamic add a
        /username in the url to complete the url{" "}
      </p>
    </>
  );
}

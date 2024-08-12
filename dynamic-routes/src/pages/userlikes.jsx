import { useParams } from "react-router-dom";
export default function UserLikesPage() {
  let { username } = useParams();
  return <h1> {username} has 1M Likes</h1>;
}

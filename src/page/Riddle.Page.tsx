import { Link } from "react-router";

export default function RiddlePage() {
  return (
    <>
      <h1>Hi from Riddle page</h1>
      <h2>Riddle:</h2>
      <p>"What is 5 + 3?"</p>
        <label htmlFor="Answer"></label>
        <input id="Answer"  type="text" />
      <Link to="/">Go to homepage</Link>
    </>
  );
}

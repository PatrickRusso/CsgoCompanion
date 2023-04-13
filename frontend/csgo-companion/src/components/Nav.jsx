import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <section>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to='/teams'>
        <h1>Teams</h1>
      </Link>
      <Link to='/players'>
        <h1>Players</h1>
      </Link>
    </section>
  );
}

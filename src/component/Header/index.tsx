import { Link } from "react-router-dom";
import "./style.css";
export default function Header() {
  return (
    <header>
      <div className="container">
        <Link to={`/`}>
          <h1 className="site-name">MyWebsite</h1>
        </Link>
      </div>
    </header>
  );
}

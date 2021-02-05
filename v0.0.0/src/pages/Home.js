import "../styles.css";
import Login from "../components/Login";
import Logout from "../components/Logout";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Independent Evaluations of COVID-19 Serological Tests</h3>
      </header>
      <main>
        <Link to="/dashboard">
          <button>GUEST</button>
        </Link>
        <Login />
        <br />
        <Logout />
      </main>
      <footer>
        <a
          className="App-link"
          href="https://github.com/yueyue4737/serological-testing/blob/main/LICENSE"
          target="_blank"
        >
          {"Copyright © "} Yue Liu
        </a>
      </footer>
    </div>
  );
}

import "../styles.css";
import { useState } from "react";
import Login from "../components/Login";
import Logout from "../components/Logout";
import { Link } from "react-router-dom";
// import jwt from "jsonwebtoken";

export default function Home() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const [message, setMessage] = useState("You are not logged in!");

  // async function submitForm() {
  //   const res = await fetch("/dashboard", {
  //     method: "POST",
  //     body: JSON.stringify({ username, password })
  //   }).then(t => t.json());

  //   const token = res.token;

  //   if (token) {
  //     const json = jwt.decode(token);
  //     console.log(json);
  //     // setMessage("Welcome" + json.usename + "and your are" + json);
  //     setMessage(
  //       `Welcome ${json.username} and you are ${
  //         json.admin ? "an admin" : "not an admin"
  //       }`
  //     );
  //   } else {
  //     setMessage("Something went wrong!");
  //   }
  // }
  return (
    <div className="App">
      <header className="App-header">
        <h3>Independent Evaluations of COVID-19 Serological Tests</h3>
      </header>
      <main>
        {/* <h6>{message}</h6>
        <Link to="/dashboard">
          <button>GUEST</button>
        </Link>
        <form>
          <input type="text" defaultValue="admin" />
          <br />
          <input type="password" defaultValue="admin" />
          <br />
          <input type="submit" value="Login" onClick={submitForm} />
        </form> */}
        <Link to="/dashboard">
          <button>Guest Login</button>
        </Link>
        <form method="GET" action="/dashboard">
          <input type="text" defaultValue="admin" />
          <br />
          <input type="password" defaultValue="admini" />
          <br />
          <input type="submit" value="Login" />
        </form>
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

import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Dashboard } from "./pages/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;

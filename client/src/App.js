import PlayArea from "./components/PlayArea";
import JoinPage from "./components/JoinPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={JoinPage} />
        <Route path="/play/:id" component={PlayArea} />
      </Switch>
    </Router>
  );
};

export default App;

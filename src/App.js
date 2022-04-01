import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from "./routes/routes.js";
import Private from "./routes/Private";
import Public from "./routes/Public";

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        {routes.map((route, index) =>
          route.auth ? (
            <Private key={index} exact {...route} />
          ) : (
            <Public key={index} exact {...route} />
          )
        )}
      </Switch>
    </Router>
  );
}

export default App;

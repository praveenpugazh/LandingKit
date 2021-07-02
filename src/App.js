import "./App.css";
import Home from "./pages/Home";
import Landings from "./pages/Landings";
import Pages from "./pages/Pages";
import Documentation from "./pages/Documentation";
import Account from "./pages/Account";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/landings" component={Landings} />
        <Route path="/documentation" component={Documentation} />
        <Route path="/pages" component={Pages} />
        <Route path="/account" component={Account} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

import Products from "./components/Products";
import Header from "./components/Header";
import Specials from "./components/Specials";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div className="App ">
        <Header />
        <Switch>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/specials">
            <Specials />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

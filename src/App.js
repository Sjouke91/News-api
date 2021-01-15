import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navigation from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import { fetchTopHeadlines } from "./store/Articles/actions";

function App() {
  const [searchText, set_searchText] = useState("");
  const [activeArticle, set_activeArticle] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopHeadlines());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="row">
        <div className="col-12">
          <Navigation searchTextSetter={set_searchText}></Navigation>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home searchText={searchText} activeArticle={activeArticle}></Home>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

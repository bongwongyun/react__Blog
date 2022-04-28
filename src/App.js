import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/Login">
                        <Login />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;

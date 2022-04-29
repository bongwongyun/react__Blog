import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import MyPages from "./pages/mypages/MyPages";
import Post from "./components/post/Post";
import Write from "./pages/write/Write";
import View from "./pages/view/View";

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
                    <Route path="/Join">
                        <Join />
                    </Route>
                    <Route path="/post">
                        <Post />
                    </Route>
                    <Route path="/view">
                        <View />
                    </Route>
                    <Route path="/write">
                        <Write />
                    </Route>
                    <Route path="/Mypages">
                        <MyPages />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;

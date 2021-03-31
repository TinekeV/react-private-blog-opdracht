import React, { useState } from 'react';
import {Switch, Route, NavLinkLink, Redirect, NavLink} from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BlogOverview from "./pages/BlogOverview";
import BlogPost from "./pages/BlogPost";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

    return (

    <>
        <nav className="nav-header">
            <ul className="nav-container">
                <li>
                <NavLink to="/" exact activeClassName="active-link">Homepage</NavLink>
                </li>

                {/* pages zijn private */}
                {isAuthenticated === true && <li>
                    <NavLink to="/blogposts" activeClassName="active-link">Blogposts Overview</NavLink>
                </li>}
                <NavLink to ="/blogposts">
                    <li>
                        <button onClick={() => toggleIsAuthenticated(true)}>Inloggen</button>
                    </li>
                </NavLink>
                <button onClick={() => toggleIsAuthenticated(false)}>Uitloggen</button>
            </ul>
        </nav>
        <Switch>
            <Route exact path="/" >
                <HomePage />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route path="/blogposts" >
                {isAuthenticated === true ? <BlogOverview /> : <Redirect to="/"/>}
            </Route>
            <Route path="/blog/:id">
                {isAuthenticated === true ? <BlogPost /> : <Redirect to="/"/>}
            </Route>
        </Switch>
    </>
  );
}

export default App;

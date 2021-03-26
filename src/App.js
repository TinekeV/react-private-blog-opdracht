import React, { useState } from 'react';
import { Switch, Route, Link, Redirect } from "react-router-dom";
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
        <nav>
            <ul>
                <li>
                    <Link to="/">Homepage</Link>
                </li>
                <li>
                    <LoginPage />
                </li>
                {isAuthenticated === true && <li>
                    <Link to="/blogposts">Overzicht Blogposts</Link>
                </li>
                }
                {isAuthenticated === true && <li>
                    <Link to="/blog/:id">Nieuwe Blogpost</Link>
                </li>
                }
                <li><button type="button">Uitloggen</button></li>
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
                <BlogOverview />
            </Route>
            <Route path="/blog/:id">
                {isAuthenticated === true ? <BlogPost /> : <Redirect to="/"/>}
            </Route>
        </Switch>
    </>
  );
}

export default App;

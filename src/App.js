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

                {/*<li>*/}
                {/*    <button onClick={() => toggleIsAuthenticated(true)}>Inloggen</button>*/}
                {/*</li>*/}

                <button
                    onClick={() => toggleIsAuthenticated(!isAuthenticated)}
                >
                    {isAuthenticated ? 'Uitloggen' : 'Inloggen'}
                </button>

                {isAuthenticated === true && <li>
                    <Link to="/blogposts">Overzicht Blogposts</Link>
                </li>
                }
                {isAuthenticated === true && <li>
                    <Link to="/blog/:id">Blogpost</Link>
                </li>
                }
                {/*<button onClick={() => toggleIsAuthenticated(false)}>Uitloggen</button>*/}

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
                {isAuthenticated === true ? <BlogOverview /> : <Redirect to="/"/>}
            </Route>
            <Route path="/blog/:id">
                {isAuthenticated === true ? <BlogPost /> : <Redirect to="/"/>}
                <BlogPost />
            </Route>
        </Switch>
    </>
  );
}

export default App;

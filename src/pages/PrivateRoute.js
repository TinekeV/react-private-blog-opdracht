import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({children, isAuthenticated, ...rest }) {
    if(isAuthenticated === false) {
        return <Redirect to={`/`}/>
    }

    return (
        <Route {...rest}>
            {children}
        </Route>
    )
}

export default PrivateRoute
import React from "react";
import { useHistory } from "react-router-dom";

function LoginPage() {
    const history = useHistory();

    function handleClick() {
        history.push("/blogposts")
    }



    return (
        <div>
            <button type="button" onClick={handleClick}>Inloggen</button>
        </div>
    );
}

export default LoginPage
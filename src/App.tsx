import React from "react";
import "./App.css";
import { useAuth } from "./context/authContext";
import { AuthenticatedApp } from "./authenticated-app";
import { UnauthenticatedApp } from "./unauthenticated-app";
function App() {
    const { user } = useAuth();
    const token =
        window.localStorage.getItem("__auth_provider_token__") || user?.token;
    return (
        <div className="App">
            {token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </div>
    );
}

export default App;

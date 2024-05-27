import { useAuth } from "./context/authContext";
import { ProjectList } from "./pages/projectList";
export const AuthenticatedApp = () => {
    const { logout } = useAuth();
    return (
        <div>
            <button onClick={logout}>登出</button>
            <ProjectList />
        </div>
    );
};

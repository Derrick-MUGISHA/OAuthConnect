import { redirect } from "next/navigation";
import Dashboard from "./dashboard";

const DashboardPage: React.FC = async() => {
    // TODO: Add authentication logic here
    const isAuthenticated = true; // Replace with actual authentication logic
    // const isAuthenticated = await checkIsAuthenticated(); // Replace with actual authentication logic
    if (!isAuthenticated) {
        redirect('/auth/sign-in');
    } else {
    return <Dashboard />
    }
}
export default DashboardPage;
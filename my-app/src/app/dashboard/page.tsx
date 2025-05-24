import { redirect } from "next/navigation";
import Dashboard from "./dashboard";
import { checkIsAuthenticated } from "@/src/lib/auth/checkIsAuthenticated";

const DashboardPage: React.FC = async() => {
    // Check if the user is authenticated
    const isAuthenticated = await checkIsAuthenticated(); // Replace with actual authentication logic
    if (!isAuthenticated) {
        redirect('/auth/sign-in');
    } else {
    return <Dashboard />
    }
}
export default DashboardPage;
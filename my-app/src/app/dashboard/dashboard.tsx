import { SignOutButton } from "@/src/components/sign-out-button";

const Dashboard: React.FC = () => {
    return <div className="dashboard-page">
        <h1>Dashboard</h1>
        <div className="dashboard-card">
            <SignOutButton className="signout-button" />
        </div>
    </div>
};

export default Dashboard;
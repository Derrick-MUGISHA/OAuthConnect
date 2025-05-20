import { redirect } from "next/navigation";
import SignInPage from "./signin";

const SignIn: React.FC = async() => {
    // TODO: Check if user is authenticated
    const isAuthenticated = false; // Example
    // const isAuthenticated = await checkUserAuthentication(); 
    if (isAuthenticated) {
        redirect("/dashboard");
    } else {
        return <SignInPage/>;// render sign in page
    }
    
}

export default SignIn;

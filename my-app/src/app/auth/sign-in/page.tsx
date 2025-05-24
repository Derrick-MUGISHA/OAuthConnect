import { redirect } from "next/navigation";
import SignInPage from "./signin";
import { checkIsAuthenticated } from "@/src/lib/auth/checkIsAuthenticated";

const SignIn: React.FC = async() => {
    const isAuthenticated = await checkIsAuthenticated(); 
    if (isAuthenticated) {
        redirect("/dashboard");
    } else {
        return <SignInPage/>;// render sign in page
    }
    
}

export default SignIn;

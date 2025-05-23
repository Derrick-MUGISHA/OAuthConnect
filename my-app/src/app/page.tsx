import React from 'react';
import { SignInButton } from '../components/sign-in-button';

const Home = () => {
    return (
        <div className='home-page'>
            <h1>Welcome to My App</h1>
            <p>This is the home page.</p>
            <div>
                <SignInButton className="signin-button">Sign In</SignInButton>
            </div>
        </div>
    );
}
export default Home;
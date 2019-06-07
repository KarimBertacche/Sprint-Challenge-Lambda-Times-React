import React from 'react';
import TopBar from './TopBar';
import Header from './Header';

function LoginPage() {
    return(
        <div>
            <TopBar className="TobBar"/>
            <Header />
            <main>
                <section>
                    <input
                        type="text"
                        placeholder="Username"/>
                </section>
                <section>
                    <input
                        type="password"
                        placeholder="Password"/>
                </section>
                <button>Login</button>
            </main>
        </div>
    );
}

export default LoginPage;
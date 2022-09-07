import React from "react";
import Navbar from '../components/Navbar/Navbar';

function Default({ children }: { children: React.ReactNode }) {
    return (
        <div className="App-header">
            <Navbar />
            <main className="mainContainer">
                {children}
            </main>
        </div>
    )
}

export default Default;
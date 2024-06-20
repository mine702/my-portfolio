import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to My Portfolio</h1>
                <p>This is a brief introduction about yourself.</p>
            </main>
            <Footer />
        </div>
    );
};

export default Home;

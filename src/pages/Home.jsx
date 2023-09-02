import React from 'react';
import { Header, Purpose, Function, Legal, Address, Footer } from '../components';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Purpose />
            <Function />
            <Legal />
            <Address />
            <Footer />
        </React.Fragment>
    )
}

export default Home
import React from 'react';
import { Navbar, Footer, Address, Function2, Faq, Solution } from '../components';
import ServiceStyles from '../styles/ServiceStyles.scss';

const Service = () => {
    return (
        <main className='service'>
            <div className='service'>
                <header className="service__header">
                    <Navbar />
                    <div className='hero2'>
                        <h2>Leading Consulting AGency</h2>
                        <p>More than 34 years of experience</p>
                    </div>
                </header>
            </div>
            <Function2 />
            <Faq />
            <Solution />

            <div className="service__got">
                <h2>No matter who you are , we've got <br />what you need</h2>
            </div>
            <Address />
            <Footer />
        </main>
    )
}

export default Service
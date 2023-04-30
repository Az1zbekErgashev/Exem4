import React from 'react';
import './page1.css'
import Header from './neader/header';
import BodyPage1 from './body/body';
import Section1 from './section1/section1';
import Footer from './footer/footer';
const Pag1 = () => {
    return (
        <div className='page1'> 
            <Header/>
            <BodyPage1/>
            <Section1/>
            <Footer/>
        </div>
    );
}

export default Pag1;

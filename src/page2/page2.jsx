import React from 'react';
import Search from '../page1/neader/header'
import './page2.css'
import BodyPage2 from './body/body'

const Page2 = () => {
    return (
        <div className='page2'>
            <Search  />
            <BodyPage2/>
        </div>
    );
}

export default Page2;

import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './section1.css'
const Section1 = () => {
    const [arr] = useState([
        {
            name: 'Ro’yxatdan o’tanlar',
            icon: 'bi bi-person',
            number: '1 712 001' ,
            icon2: 'bi bi-info-circle'
        }
    ])
    return (
        <div className='section1'>
            
                {
                    arr.map((iteam , index)=> {
                        return (
                            <div key={index}>
                                <h4 className='mx-5'>{iteam.name}</h4>
                                <div className='text-primary cardSec1'>
                                    <i className={iteam.icon}></i>
                                    <p className='fw-bold'>{iteam.number}</p>
                                    <i className={iteam.icon2}></i>
                                </div>
                            </div>
                        )
                        })
                }
        
        </div>
    );
}

export default Section1;

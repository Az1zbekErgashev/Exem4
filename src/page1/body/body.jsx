import React, {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './body.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const Body = () => {
    const [arr] = useState([
        {
            oy:'Sen' ,
            kun: 26,
        },
        {
            oy:'Sen' ,
            kun: 27,
        },
        {
            oy:'Sen' ,
            kun: 28,
        },
        {
            oy:'Sen' ,
            kun: 29,
        },
        {
            oy:'Sen' ,
            kun: 30,
        },
            {
                oy: 'Okt',
                kun: 1,
            },
            {
                oy: 'Okt',
                kun: 2,
            },
            {
                oy: 'Okt',
                kun: 3,
            },
            {
                oy: 'Okt',
                kun: 4,
            },
            {
                oy: 'Okt',
                kun: 5,
            },
    ])
    return (
        <div className='bodyPage1'>
            <div className='d-flex bodyPage1Slide'>
                <div className='cardData'> 
                    <i className='bi bi-arrow-bar-left fs-1'></i>    
                </div>    
                <div className='d-flex'>
                    {
                        arr.map((iteam , index)=>{
                            return(
                                <div key={index} className='dataOyKun '>
                                    <div className='cardData'>
                                        <p>{iteam.oy}</p>
                                        <h6>{iteam.kun}</h6>
                                    </div>
                                </div>
                            )   
                        })
                    }
                </div>    
                <div  className='cardData'>
                    <i className='bi bi-arrow-bar-right fs-1'></i>
                </div>    
            </div>  
        </div>
    );
}

export default Body;

import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './footer.css'
const Footer = () => {
    const [arr] = React.useState([
        {
            name:'Faol foydalanuvchilar',
            icon: 'bi bi-person',
            count: '1.5 mln',
            fozi: '+15%',
            link: 'Batafsil',
            icon2: 'bi bi-arrow-up-right-circle'
        },
        {
            name:'Shaxsini tasdiqlagan',
            icon: 'bi bi-person',
            count: '625.1k',
            fozi: '+15%',
            link: 'Batafsil',
            icon2: 'bi bi-arrow-up-right-circle'
        },
        {
            name:'Shubhali foydalanuvchi',
            icon: 'bi bi-person',
            count: '5.1k',
            fozi: '-3.5%',
            link: 'Batafsil',
            icon2: 'bi bi-arrow-up-left-circle'
        },
        {
            name:'Faol bo’lmagan ',
            icon: 'bi bi-person',
            count: '25.1k',
            fozi: '+15%',
            link: 'Batafsil',
            icon2: 'bi bi-arrow-up-right-circle'
        },
        {
            name:'Soliq xodimlari',
            icon: 'bi bi-person',
            count: '2.1k',
            fozi: '+5%',
            link: 'Batafsil',
            icon2: 'bi bi-arrow-up-right-circle'
        },
        {
            name:'Yuklab olingan',
            icon: 'bi bi-person',
            count: '1.7 mln',
            fozi: '+5%',
            link: 'Batafsil',
            icon2: 'bi bi-arrow-up-right-circle'
        },
    ])
    return (
        <div className='footer container'>
            <div className='container  cardFooterRow '>

            {
                arr.map((i ,index) =>{
                    return(
                            <div className='cardFooter' key={index}>
                                <div className='d-flex justify-content-between mt-2'>
                                    <p className='fw-bold'>{i.name}</p>
                                    <i className={`${i.icon} fs-4 text-primary`}></i>
                                </div>
                                <div className='my-4'>
                                    <h4 className='fw-bold text-center'>{i.count}</h4>
                                </div>
                                <div className='d-flex justify-content-between cardfooter'>
                                    <p className={`${(i.fozi === '-3.5%' )?'text-danger ': 'text-success  text-bold'} fw-bold`}> <i className={i.icon2}></i> {i.fozi}</p>
                                    <a href="#">{i.link}</a>
                                </div>
                            </div>
                    )
                })
            }
            </div>
        </div>
    );
}

export default Footer;

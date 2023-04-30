import React, {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom'; 
import './sitebard.css'
const Sitebar = () => {
    const [arr] = useState([
        {
            name: 'Statistika',
            icon: 'bi bi-house',
            page: '/',
        },
        {
            name: 'Amallar',
            icon: 'bi bi-gear-wide',
            page: '/amallar',
        },
        {
            name: 'Ruxsatlar',
            icon: 'bi bi-person',
            page: '/Ruxsatlar',
        },
        {
            name: 'Hisobotlar',
            icon: 'bi bi-file-text',
            page: '/Hisobotlar',
        },
        {
            name: 'Call-markaz',
            icon: 'bi bi-phone',
            page: '/callmarkaz',
        },
])
   const [siteBar , setSitebar] = useState(arr)
    return (
        <div className='siteBar'>
            <div>
            {
                arr.map((iteam , index)=>{
                    return(
                        <div key={index}>
                            <div className='sitebarLink'>
                                <Link to={iteam.page} onClick={()=>setSitebar(arr[index])} className={`${(siteBar === arr[index]) ? 'sitebarLinkActive': ''} sitebarLinkFocus`}>
                                    <i className={iteam.icon}></i>
                                    <p className='mt-3'>{iteam.name}</p>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
}

export default Sitebar;

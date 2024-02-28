import React from 'react'
import logo from '../images/logo.png'
import logo1 from '../images/1.png'
import logo2 from '../images/2.png'
import logo3 from '../images/3.png'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

export const Home = () => {
    return (
        <div className='home'>
            {/* this is header part */}
            <div className='hoheader'>
                <span><img src={logo} alt="image" width={350} height={100} /></span>
            </div>

            {/* this is main detail */}
            <div className='hommain'>
                <div className='hommain01'>
                    <img src={logo1} alt="image" width={500} height={700}  className='homn01'/>
                </div>
                <div className='hommain02'>
                    <strong>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</strong>
                    <p><li>  C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li></p>
                    <p><li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li></p>
                    <img src={logo2} alt="image" width={890} height={500}  className='homm02'/>
                    <p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                </div>
            </div>

            {/* this is bottom one */}
            <div className='downbottom'>
                <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
                <p className='downbottom02'><img src={logo3} alt="image" width={100} height={100} /></p>
                <p className='downbottom03'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
                <hr />
                <strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong>
                <p className='downbottom04'>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
            </div>

            {/* this is footer one */}
            <div className='footerbottom'>
                <span><LocalPhoneRoundedIcon />&nbsp; Toll free 18002001234</span>
                <span><FacebookRoundedIcon />&nbsp; www.facebook.com/cripump</span>
                <span><LanguageRoundedIcon />&nbsp; www.crigroup.com</span>
            </div>
        </div>
    )
}
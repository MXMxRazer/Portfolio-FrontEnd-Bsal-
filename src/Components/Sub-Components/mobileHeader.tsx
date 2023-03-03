import { IoReorderThreeOutline } from 'react-icons/io5'; 
import '../../Sass/SassComponents/mobileHeader.css'; 
import {useState} from 'react'; 

export default function MobileHeader({clickFunction}: any) {
    
    return (
        <div className="mobile-header-main">
            <IoReorderThreeOutline
            id="nav-mobile-btn"
            onClick={clickFunction}
            />
        </div>
    ); 
}
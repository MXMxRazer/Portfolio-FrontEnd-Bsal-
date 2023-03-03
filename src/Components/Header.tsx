import { useEffect, useState } from 'react';
import '../Sass/SassComponents/header.css'; 
import MobileHeader from './Sub-Components/mobileHeader';
import MobileContent from './mobileContents/mobileContent';

export default function Header() { 

    const [mobileView, setMobileView] = useState(false);
    const [mobileShow, setMobileShow] = useState(false); 

    const settingMobileShowFun = () => {
        setMobileShow(prev => !prev); 
    }

    useEffect(() => {
            if (window.innerWidth <= 550) {
                setMobileView(() => true); 
            } else {
                setMobileView(() => false); 
            }
    }, [window.innerWidth]);     

    return (
        <div className="header-main">
            <div className="header-content">
                <div className="bsal-header">
                    Bsal
                </div>
                {(mobileView) ?
                <MobileHeader
                    clickFunction={settingMobileShowFun}
                />
                :
                <div className="nav-header">
                    <div className="nav-content">
                        <a href="#home">
                            Home
                        </a>
                    </div>
                    <div className="nav-content">
                        <a href="#my-work-space">
                            My Workspace
                        </a>
                    </div>
                    <div className="nav-content">
                        <a href="#my-works">
                            My Works
                        </a>
                    </div>
                    <div className="nav-content">
                        <a href="#request">
                            Request
                        </a>
                    </div>
                    <div className="nav-content">
                        <a href="#contact-me">
                            Contact Me
                        </a>
                    </div>
                </div>}
                {
                    mobileShow &&
                    <MobileContent/>
                }
            </div>
        </div>
    ); 
}
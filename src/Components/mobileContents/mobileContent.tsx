import '../../Sass/SassComponents/mobileContent.css'; 

export default function MobileContent() {
    return (
        <div className="mobile-content-main">
            <div className="nav-mobile">
                <div className="nav-mobile-content">
                    <a href="#home" id='nav-mobile-cont'>
                        Home
                    </a>
                </div>
                <div className="nav-mobile-content">
                    <a href="#my-work-space" id='nav-mobile-cont'>
                        My Workspace
                    </a>
                </div>
                <div className="nav-mobile-content">
                    <a href="#my-works" id='nav-mobile-cont'>
                        My Works
                    </a>
                </div>
                <div className="nav-mobile-content">
                    <a href="#request" id='nav-mobile-cont'>
                        Request
                    </a>
                </div>
                <div className="nav-mobile-content">
                    <a href="#contact-me" id='nav-mobile-cont'>
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    ); 
}
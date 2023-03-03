import '../Sass/SassComponents/hero.css'; 

export default function Hero() { 
    return (
        <div className="main-hero">
            <div className="hero-content">
                <div className="text-section">
                    <div className="text-title">
                        <p id="hero-title">Hello, I'm Bishal.</p>
                    </div>
                    <div className="text-para">
                        <p id="hero-para">
                        I’m a passionate computer science individual currently in Canada. I’ve experience in various programming languages and have several projects under my hood for showcase.   
                        </p>
                    </div>
                </div>
                <div className="graphic-section">
                    <div id="hero-graphic">
                    </div>
                </div>
            </div>
        </div>
    ); 
}
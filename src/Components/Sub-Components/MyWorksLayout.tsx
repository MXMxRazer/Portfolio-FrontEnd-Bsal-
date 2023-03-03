import '../../Sass/SassComponents/MyWorksLayout.css'; 

type classType = {
    nameForClass?: string | undefined; 
    picture?: string | undefined; 
    title: string; 
    infoPara: string; 
    location: string | URL | undefined; 
}

export default function MyWorksLayout({nameForClass, picture, title, infoPara, location}: classType) {
    
    const linker = (link: string | URL | undefined) => {
        window.open(link, `_blank`); 
    }
    
    return (
        <div className={nameForClass}>
            <div className="my-works-layout-main">
                <div className="circle-main">
                    <img src={picture} alt="Not Avaiable" id="circle-works" />
                    {/* <h1>{picture}</h1> */}
                </div>
                <div className="rect-main">
                    <div className="work-info-main">
                        <div className="work-info-header">
                            {title}
                        </div>
                        <div className="work-info-para">
                            This project includes a chat system that functions in 
                            real time environment and produces the message from end user
                            to another end user...
                        </div>
                        <div className="work-info-btn"
                        data-value="Link to Github"
                        onClick={e => {
                            linker(location)
                        }}
                        >
                            <p>Link</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}
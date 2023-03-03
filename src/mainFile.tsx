import ContactMe from "./Components/ContactMe";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import MyChart from "./Components/MyChart";
import MyWorkSpace from "./Components/MyWorkSpace";
import MyWorks from "./Components/MyWorks";
import Request from "./Components/Request";
import './Sass/SassComponents/mainFile.css'; 
import SnackBar from "./snackbar/snackBar";
import { useState } from 'react'; 

export default function MainFile() { 

    const [showC, setShowC] = useState(false); 
    const [showR, setShowR] = useState(false); 

    const [reqC, setReqC] = useState(false); 
    const [reqR, setReqR] = useState(false); 

    return (
        <div className="main-file">
            <nav className="nav-bar">
                <Header/>
            </nav>
            <main className="main-section">
                <Hero />
                <MyChart />
                <MyWorkSpace />
                <MyWorks />
                <Request 
                    show={showR}
                    setShow={setShowR}
                    result={reqR}
                    setResult={setReqR} 
                />
                <ContactMe
                    Show={showC}
                    setShow={setShowC}
                    result={reqC}
                    setResult={setReqC} 
                />
                <SnackBar
                    show={showR}
                    result={reqR}
                    setResult={setReqR}
                    setShow={setShowR}
                />
                <SnackBar
                    show={showC}
                    result={reqC}
                    setResult={setReqC}
                    setShow={setShowC}
                />
            </main>
            <footer className="footer-section"
            style={{'height': '0.8rem'}}
            >
            </footer>
        </div>
    ); 
}
import { useInView } from 'react-intersection-observer';
import '../Sass/SassComponents/contactMe.css'; 
import { transRes } from '../Variables (Storage)/Storage';
import { useRef } from 'react';
import axios from 'axios'; 

export default function ContactMe({Show, setShow, result, setResult}: any) {

    const refUser = useRef<any>(null); 
    const refEmail = useRef<any>(null);
    const refMessage = useRef<any>(null);
    

    const submitBtn = async (refUser: any, refEmail: any, refMessage: any) => {

        setShow(true); 

        const postData = {
            username: refUser.current.value, 
            email: refEmail.current.value, 
            message: refMessage.current.value, 
        }
        
        refUser.current.value = ""; 
        refEmail.current.value = ""; 
        refMessage.current.value = ""; 
        
        const res = await axios.post(`http://localhost:3000/api/mail`, postData); 
        if (res.status == 401) { 
            console.log(`Error posting data!`); 
        } else {
            setResult(true); 
            console.log(`Success!`); 
        }
        
    }

    const {ref: myRef, inView: contactMe} = useInView({threshold: 0.4, triggerOnce: true}); 

    return (
        <div className="contact-me-main" id="contact-me">
            <div 
            ref={myRef}
            className={`title-section ${transRes(contactMe, true)}`}>
                Contact Me
            </div>
            <div className={`content-section ${transRes(contactMe, false)}`}>
                <div className="content-info-text">
                    <div className="content-info-header">
                        Let's Talk!
                    </div>
                    <div className="content-info-para">
                        Chat with me and talk about the required
                        techincal subject matter that requires 
                        some solving. 
                    </div>
                </div>
                <div className="content-form">
                    <input 
                    type="text" 
                    placeholder="Username" 
                    className="form-box"
                    ref={refUser}
                    />
                    <input 
                    type="email" 
                    placeholder="Email" 
                    id="email"  
                    className="form-box"
                    ref={refEmail}
                    />
                    <textarea 
                    placeholder="Message" 
                    id="message" 
                    cols={30}
                    rows={10} 
                    className="form-box"
                    ref={refMessage}
                    />
                    <button
                    className="submit-btn"
                    onClick={e => submitBtn(refUser, refEmail, refMessage)}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    ); 
}
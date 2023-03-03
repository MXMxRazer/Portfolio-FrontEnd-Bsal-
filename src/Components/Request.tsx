import { useInView } from 'react-intersection-observer';
import '../Sass/SassComponents/request.css'; 
import { transRes } from '../Variables (Storage)/Storage';
import { useState, useRef } from 'react';
import RequestFront from '../upfrontComponents/requestFront';
import SnackBar from '../snackbar/snackBar';
import axios from 'axios'; 

export default function Request({show, setShow, result, setResult}: any) {

    const refUser = useRef<any>(null);
    const refEmail = useRef<any>(null);
    
    const onReqClick = async () => {
        const postData = {
            reqUser: refUser.current.value,
            reqEmail: refEmail.current.value
        }
        
        setShow(true);
        refUser.current.value = ""; 
        refEmail.current.value = ""; 

        const res = await axios.post(`http://localhost:3000/api/request`, postData);
        if (res.status == 401) {
            console.log(`Error posting data!`); 
        } else {
            setResult(true);

            console.log(`Success!`); 
        }

    }

    const {ref: myRef, inView: request} = useInView({threshold: 0.38, triggerOnce: true}); 

    return (
        <div className="request-main" id="request">
            <div 
            ref={myRef}
            className={`title-section ${transRes(request, true)}`}>
                Request
            </div>
            <div className={`content-section ${transRes(request, false)}`}>
                <div className="request-graphic">
                </div>
                <div className="request-box">
                    <div className="request-quote">
                    "Request for any software or technical service on the Fiverr or  any 
                    social media for me. As fast as possible, I'll try to help the problem 
                    with cheapest fare. Thank You!" 
                    </div>
                    <div className="form-section">
                        <div className="title-form">
                            Your details: 
                        </div>
                        <div
                        className='request-inputs'
                        >
                            <input 
                            type="text" 
                            placeholder="UserName"
                            className='request-input'
                            ref={refUser}
                            />
                            <input 
                            type="text" 
                            placeholder="Email"
                            className="request-input"
                            ref={refEmail}
                            />
                        </div>
                    </div>
                    <div 
                    className="request-button"
                    onClick={e => {
                        onReqClick(); 
                    }}
                    >
                        Request a service
                    </div>
                </div>
            </div>
        </div>
    ); 
}
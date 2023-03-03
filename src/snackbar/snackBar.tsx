import { TiTick } from 'react-icons/ti'; 
import '../Sass/SassComponents/snackBar.css'; 
import { ImCross } from 'react-icons/im'; 

type showingType = {
    show: boolean; 
    result: boolean; 
    setShow: Function; 
    setResult: Function; 
}; 

export default function SnackBar({ show, result, setShow, setResult }: showingType) {

    let r; 

    if (show && result) {
        r = true; 
    } else {
        r = false; 
    }

    setTimeout(() => {
        setShow(false);
        setResult(false); 
    }, 12000)

    const success = (
        <div
        className={(r) ? `inner-snackbar` : `inactive`}
        style={{
            backgroundColor: 'rgb(66, 155, 66)'
        }}
        >
            <TiTick 
            id='logo'
            />
            <h4
            id='text'
            >
                Sent Successfully
            </h4>
        </div>
    ); 

    const failure = (
        <div
        className={(!r && show) ? `inner-snackbar`: `inactive`}
        style={{
            backgroundColor: 'rgb(178, 27, 27)'
        }}
        >
            <ImCross
            id='logo'
            style={{
                fontSize: '1rem'
            }}
            />
            <h4
            id='text'
            >
                Failed to send. Try Again!
            </h4>
        </div>
    )

    return (
        <div
        className="super-snackbar"
        >
            {success}
            {failure}
        </div>
    ); 

}
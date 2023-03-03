import { useState } from 'react';
import '../../Sass/SassComponents/Carousel.css';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'; 

type childType = {
    children: any;
    valueCalc: number; 
    setValueCalc: React.Dispatch<React.SetStateAction<number>>; 
    slideArray?: number[]; 
    lenOfSlides: number; 
    caroClass?: string | Function | null | any; 
}; 


export default function Carousel({children, valueCalc, setValueCalc, lenOfSlides, caroClass}: childType) { 

    // const [valueCalc, setValueCalc] = useState<number>(0);

    //Slide Number To Show. 
    const [slideNo, setSlideNo] = useState<number>(0); 

    //ClassNames For Slides. 


    //Button Actions. 
    const BtnAction = (direction: string, e: Event) => {
        if (direction === "left") {
            const res = ((!(valueCalc <= 0)) ? 
            (setValueCalc((prev: number) => prev - 1)) 
            : 
            (setValueCalc((prev: number) => lenOfSlides - 1))); 
        } else if (direction === "right") {
            const res2 = ((!(valueCalc >= lenOfSlides - 1)) ? 
        (setValueCalc((prev: number) => prev + 1)) 
        : 
        (setValueCalc((prev: number) => 0))); 
        }
    }

    console.log(`Value Calc: ${valueCalc}`); 

    return (
        <div className={`carousel-main ${caroClass}`}>
        <div className="btn-main">
            <BiLeftArrow 
            className="carousel-btn"
            onClick = {(e: any) => {
                BtnAction("left", e); 
            }}
            />
        </div>
            <div className="slider">
                <div className="slides"> 
                    {children}
                </div>
            </div>
            <div className="btn-main">
                <BiRightArrow 
                className="carousel-btn"
                onClick = {(e: any) => {
                    BtnAction("right", e); 
                }}
                />   
            </div>
        </div>
    ); 
}
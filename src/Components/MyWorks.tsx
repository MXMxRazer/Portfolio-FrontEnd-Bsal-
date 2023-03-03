import Carousel from "./Sub-Components/Carousel";
import { useState } from 'react'; 
import MyWorksLayout from "./Sub-Components/MyWorksLayout";
import '../Sass/SassComponents/MyWorks.css'; 
import { githubProjects, myWorksProjects, transRes } from "../Variables (Storage)/Storage";
import { useInView } from "react-intersection-observer";

export default function MyWorks() {
    
    const { ref: myRef, inView: myChart } = useInView({threshold: 0.4, triggerOnce: true});  

    //Value for Calc. 
    const [valueCalc, setValueCalc] = useState<number>(0);

    //Array of Slides. 
    // const slides: number[] = [0, 1, 2, 3, 4]; 

    //Length of slides. 
    // const lenOfSlides: number = slides.length; 
    const lenOfSlides: number = myWorksProjects.length; 

    return (
        <div className="my-works-main" id="my-works">
            <div 
            className={`my-works-title ${transRes(myChart, true)}`}
            ref={myRef}
            >
                My Works
            </div>
            <Carousel
                caroClass={transRes(myChart, false)}
                valueCalc={valueCalc}
                setValueCalc={setValueCalc}
                lenOfSlides={lenOfSlides}
            >
                {
                    myWorksProjects.map((item: any) => {
                        return (
                            // <div className={`slide ${(valueCalc === item) ? 'active': null}`}>
                            //     This is {item}. 
                            // </div>
                            <>
                            <MyWorksLayout
                                key={item.id} 
                                nameForClass={`slide ${(valueCalc === parseInt(item.id)) ? 'active': null}`}
                                picture={item.image}
                                title={item.title}
                                infoPara={item.info}
                                location={item.location + githubProjects[item.id]}
                            />
                            </>
                        ); 
                    })
                }
            </Carousel>
        </div>
    )
}
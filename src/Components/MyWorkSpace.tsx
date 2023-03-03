import { myWorkSpaceObject, transRes } from "../Variables (Storage)/Storage"; 
import '../Sass/SassComponents/myWorkSpace.css'; 
import { useInView } from "react-intersection-observer";

export default function MyWorkSpace() {

    const {ref: myRef, inView: myWorkSpace} = useInView({threshold: 0.4, triggerOnce: true});

    return (
        <div className="my-work-space-main" id="my-work-space">
            <div className="first-section">
                <div 
                ref={myRef}
                className={`my-work-space-title ${transRes(myWorkSpace, true)}`}>
                    My WorkSpace
                </div>
                <div className={`work-space-super-box ${transRes(myWorkSpace, false)}`}>
                    {
                        Object.keys(myWorkSpaceObject).map((item, index) => {
                            return (
                                <div className="work-space-sub-box">
                                    <div className="sub-box-bar-full">
                                        <div className="sub-box-bar-filled" id={`id-${index.toString()}`}>
                                        </div>
                                    </div>
                                    <div className="bar-info">
                                        <div className="sub-box-icon-percent">
                                            {myWorkSpaceObject[item]}
                                        </div>
                                        <div className="sub-box-subtitle-name">
                                            {item}
                                        </div>
                                    </div>
                                </div>
                            ); 
                        })
                    }
                </div>
            </div>
            <div className={`second-section ${transRes(myWorkSpace, false)}`}>
                <div className="graphic-section">
                    {
                        Array(1, 2, 3, 4, 5, 6).map(item => {
                            return (
                                <div className="box">
                                </div>
                            ); 
                        })
                    }
                </div>
            </div>
        </div>
    )
}
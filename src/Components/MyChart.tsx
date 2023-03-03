import { InView } from 'react-intersection-observer/InView';
import '../Sass/SassComponents/myChart.css';  
import { useInView } from 'react-intersection-observer';
import {useEffect} from 'react'; 
import Styles from '../Sass/SassComponents/universal.module.css'; 
import { transRes } from '../Variables (Storage)/Storage';

export default function MyChart() {

    const { ref: myRef, inView: myChart } = useInView({threshold: 0.4, triggerOnce: true});  

    return (
        <div className={"my-chart-main"}>
            <div 
            className={`title-section ${transRes(myChart, true)}`}
            ref={myRef}
            >
                My Chart
            </div>
            <div 
            className={`super-box ${transRes(myChart, false)}`}
            >
                <div className={`sub-box`}>
                    <div className="sub-box-header">
                        12
                    </div>
                    <div className="sub-box-subtitle">
                        Projects                       
                    </div>
                </div>
                <div className="sub-box">
                    <div className="sub-box-header">
                        2+
                    </div>
                    <div className="sub-box-subtitle">
                        Years Spent
                    </div>
                </div>
                <div className="sub-box">
                    <div className="sub-box-header">
                        10000+
                    </div>
                    <div className="sub-box-subtitle">
                        Hours Spent
                    </div>
                </div>
            </div>
        </div>
    ); 
}
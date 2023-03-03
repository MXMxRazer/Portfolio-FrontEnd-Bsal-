import Styles from '../Sass/SassComponents/universal.module.css'; 
import chatSystemImg from '../assets/chatSystemImg.webp';   
import DBImg from '../assets/dbImg.png'; 
import JWTIcon from '../assets/jwtIcon.png'; 

//Links to my github projects (ONLY FRONTEND). 
const githubProjects = [
    `chatProject`,
    `Auth-NestJs-`, 
    `MovieFrontEnd` 
]

// Object for storing  the workSpace variables (languages to display in the frontEnd Side). 
const myWorkSpaceObject: any = {
    JavaScript: '90%', 
    Java: '68%', 
    Python: '48%', 
    Figma: '32%', 
    Mixed_FrameWork: '22%'
}

// Oject for storing the project info for My Works Component.
const myWorksProjects = [
    {
        id: '0', 
        image: chatSystemImg, 
        title: 'Real Time Chat System', 
        info: 'Something later',
        btn: 'Learn More',  
        location: `https://www.github.com/MXMxRazer/`
    }, 
    {
        id: '1', 
        image: DBImg, 
        title: 'Movie Database Interactive System', 
        info: 'Something later', 
        btn: 'Learn More', 
        location: `https://www.github.com/MXMxRazer/`
    }, 
    {
        id: '2', 
        image: JWTIcon, 
        title: 'JWT Authentication System', 
        info: 'Something later', 
        btn: 'Learn More', 
        location: `https://www.github.com/MXMxRazer/`
    }
]

//Transition Operation - Left. 
const transRes = (transVal: any, header: boolean) => { 

    const res = (
                (transVal) ?
                (header ? 
                Styles.activeHeader : 
                Styles.active)
                :
                (
                    null
                )    
                );
    return res; 
}

// Exporting System Here!
export { myWorkSpaceObject, myWorksProjects, transRes, githubProjects };
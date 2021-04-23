import Photo1 from './img/photo1.jpg';
import Photo2 from './img/photo2.jpg';
import Photo3 from './img/photo3.jpg';
import Photo4 from './img/photo4.jpg';
import Photo5 from './img/photo5.jpg';
import Photo6 from './img/photo6.jpg';
import Photo7 from './img/photo7.jpg';
import Photo8 from './img/photo8.jpg';
import Photo9 from './img/photo9.jpg';

const Photos = () => {
    return(
        <div className="photos flex">
         <img src={Photo1} alt="big-bang-theory"/> 
         <img src={Photo2} alt="big-bang-theory"/> 
         <img src={Photo3} alt="big-bang-theory"/> 
         <img src={Photo4} alt="big-bang-theory"/> 
         <img src={Photo5} alt="big-bang-theory"/> 
         <img src={Photo6} alt="big-bang-theory"/> 
         <img src={Photo7} alt="big-bang-theory"/> 
         <img src={Photo8} alt="big-bang-theory"/> 
         <img src={Photo9} alt="big-bang-theory"/> 
        </div>
    )
}

export default Photos;
import React from 'react'
import "./Footer.css";
import img_1 from "../../assets/1.jpg";
import img_2 from "../../assets/2.jpg";
import img_3 from "../../assets/3.jpg";
import img_4 from "../../assets/4.jpg";
import img_5 from "../../assets/5.jpg";
import img_6 from "../../assets/6.jpg";
import img_7 from "../../assets/7.jpg";
import img_8 from "../../assets/8.jpg";
import {NavLink} from 'react-router-dom';



const Footer = () => {
  return (
    <div className='footer'>
        <footer>
        
            <div className='footer_text'>
               <span>Bring </span>
               <span>Happiness </span>
               <span> To Your </span>
               <span> Home </span>

                </div>

            <div className='footer_images'>
            <img src={img_1} alt='' className='img_1'/>
            <img src={img_2} alt='' className='img_2'/>
            <img src={img_3} alt='' className='img_3'/>
            <img src={img_4} alt='' className='img_4'/>
             <img src={img_5} alt='' className='img_5'/>
            {/* <img src={img_6} alt='' className='img_6'/>
            <img src={img_7} alt='' className='img_7'/>  */}
            
            
            


            </div>
            <div className='lower_text_of_footer'>
                <h2 className='our_stores'>OUR STORES</h2>
                <ul className='city_names'>
                    <li> Delhi </li>
                    <li> Mumbai</li>
                    <li> Agra</li>
                    <li>Ghaziabad</li>
                    
                </ul>
                
            </div>
            

        </footer>
        </div>
  )
}

export default Footer;
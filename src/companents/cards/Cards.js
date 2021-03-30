import React, {Component} from "react";
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import './Cards.scss';
import '../../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from "@fortawesome/free-solid-svg-icons";

import katric from '../../img/katric.png';
import cartigePart from '../../img/cartridgesPart.jpg';
import printerPart from '../../img/printerParts.jpg';
import toner1 from '../../img/toner1.png';
import toner2 from '../../img/toner2.png';
import ink1 from '../../img/ink1.png';
import ink2 from '../../img/ink2.png';

class Cards extends Component{
        
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    
    handleScroll() {
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            let bottom_of_object = $(this).position().top + $(this).outerHeight();
            let bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    };
    render(){
      return (
        <section className="featured-center">
            <NavLink className="flip-card hideme" to='/catridges'>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1 className='flip-card-front-title'>Katriclər</h1> 
                        <img src={katric} alt="Avatar" />
                    </div>
                    <div className="flip-card-back">
                        <FontAwesomeIcon icon={faSearch} className='flip-card-back-icon'/>
                    </div>
                </div>
            </NavLink>
            <NavLink className="flip-card hideme" to='/toner'>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1 className='flip-card-front-title'>Toner</h1> 
                        <img src={toner2} alt="Avatar" />
                    </div>
                    <div className="flip-card-back">
                        <img src={toner1} alt="Avatar" />
                        <div className='flip-card-curtain'></div>
                        <FontAwesomeIcon icon={faSearch} className='flip-card-back-icon'/>
                    </div>
                </div>
            </NavLink>
            <NavLink className="flip-card hideme" to='/catridges-parts'>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1 className='flip-card-front-title'>Katric Hissələri</h1> 
                        <img src={cartigePart} alt="Avatar" />
                    </div>
                    <div className="flip-card-back">
                        <FontAwesomeIcon icon={faSearch} className='flip-card-back-icon'/>
                    </div>
                </div>
            </NavLink>
            <NavLink className="flip-card hideme" to='/ink'>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1 className='flip-card-front-title'>Mürəkkəb (ink)</h1> 
                        <img src={ink1} alt="Avatar" />
                    </div>
                    <div className="flip-card-back">
                        <img src={ink2} alt="Avatar" />
                        <div className='flip-card-curtain'></div>
                        <FontAwesomeIcon icon={faSearch} className='flip-card-back-icon'/>
                    </div>
                </div>
            </NavLink>
            <NavLink className="flip-card hideme" to='/printer-parts'>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1 className='flip-card-front-title'>Printer Hissələri</h1> 
                        <img src={printerPart} alt="Avatar" />
                    </div>
                    <div className="flip-card-back">
                        <FontAwesomeIcon icon={faSearch} className='flip-card-back-icon'/>
                    </div>
                </div>
            </NavLink>
            {/* <NavLink className="feature-card" to='/catridges' >
                <img
                src={katric}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Katriclər</button>
            </NavLink>
            <NavLink className="feature-card" to='/toner'>
                <img
                src={toner}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Toner (dolum üçün)</button>
            </NavLink>
            <NavLink className="feature-card" to='/catridges-parts'>
                <img
                src={cartigePart}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Katric Hissələri</button>
            </NavLink>
            <NavLink className="feature-card" to='/ink'>
                <img
                src={ink}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Mürəkkəb (ink)</button>
            </NavLink>
            <NavLink className="feature-card" to='/printer-parts'>
                <img
                src={printerPart}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Printer Hissələri</button>
            </NavLink> */}
        </section>
      );
    } 
}

export default Cards;

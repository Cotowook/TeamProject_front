import React from 'react';
import './Productsmain.css';
import advertisement from '../img/coad.jpg';
import Productsmainbest from './Productsmainbest';
import Productsmainnew from './Productsmainnew';
function Productsmain() {
   
    return (
        <div className="Productsmain">
            <div className="advertisement">
                <img src={advertisement} alt="advertisement"/>
                <h1>BEST</h1>
                <div className="main_best"> 
                <div className="main_bestscroll">                
                <Productsmainbest/>
                </div>
                </div>
                <div className="prototype"></div>
                <h1>New</h1>
                <div className="main_new">
                    <div className="main_newscroll">
                     <Productsmainnew/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productsmain;
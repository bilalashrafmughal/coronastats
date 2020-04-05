import React, {Component} from 'react'
import '../Stylesheets/Symtoms.css'
import imgs from '../images/symtoms.jpg';

class Symtoms extends Component{
    render(){
        return(
            <div className="Symtoms-wrapper">
                <h1>Symtoms of <span>Coronavirus</span> </h1>
            <div className="Symtoms">
                <div className="Symtoms-box">
                    <div className="Symtom">
                        <div className="Symtom-icon">
                        <i className="fas fa-thermometer-full"></i>
                        </div>
                        <div className="Symtom-text">
                            <h3>Hot Fever</h3>
                        </div>
                    </div>
                    <div className="Symtom">
                        <div className="Symtom-icon">
                        <i className="fas fa-lungs"></i>
                        </div>
                        <div className="Symtom-text">
                            <h3>Short Breathness</h3>
                        </div>
                    </div>
                    <div className="Symtom">
                        <div className="Symtom-icon">
                        <i className="fas fa-head-side-cough"></i>
                        </div>
                        <div className="Symtom-text">
                            <h3>Cough</h3>
                        </div>
                    </div>
                    <div className="Symtom">
                        <div className="Symtom-icon">
                        <i className="fas fa-head-side-cough-slash"></i>
                        </div>
                        <div className="Symtom-text">
                            <h3>Tiredness</h3>
                        </div>
                    </div>
                    
                </div>
                <div className="Symtoms-image">
                    <img src={imgs} alt="symtoms" />
                </div>
            </div>
            </div>
            // 
            // 
            // 
            // 
        )
    }
}

export default Symtoms;
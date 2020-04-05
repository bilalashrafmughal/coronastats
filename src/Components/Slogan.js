import React, {Component} from 'react';
import '../Stylesheets/Slogan.css';

class Slogan extends Component{
    render(){
        return(
            <div className="Slogan">
                <h1>{this.props.text}</h1>
                <span></span>
            </div>
        )
    }
}
export default Slogan;
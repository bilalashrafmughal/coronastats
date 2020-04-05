import React, {Component} from 'react';
import '../Stylesheets/Footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="Footer-wrapper">
            <div className="Footer">
                <div className="Footer-developer col-box">
                    <h2>Developed By</h2>
                    <h4>Bilal Ashraf</h4>
                </div>
                <div className="Footer-about col-box">
                    <h2>About</h2>
                    <h4>Masters Of Computer Science</h4>
                </div>
                <div className="Footer-contact col-box">
                    <h2>Contacts</h2>
                    <div className="Footer-social">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                    
                </div>
            </div>
            <div className="Footer-copyright">
            All Rights Reserved. Copyright &copy; 2020 
        </div>
        </div>
        )
    }
}

export default Footer;
import React, {Component} from 'react'
import axios from 'axios'
import loading from '../images/loader.gif';
import '../Stylesheets/CoronaStats.css';
const url ="https://covid19.mathdro.id/api/countries/";




class CoronaStats extends Component{
    static defaultProps = {
        country: "Pakistan",
        isLoading: false
    }
    
    constructor(props){
    super(props);
    this.state = {
        cases: 'Loading...',
        recovered: 'Loading...',
        deaths: 'Loading...'
    }       
    }

    async componentDidMount(){
        this.setState({
            isLoading: true
        })
        let data = await axios.get(`${url}${this.props.country}`)
        this.setState({
            cases: data.data.confirmed.value,
            recovered: data.data.recovered.value,
            deaths: data.data.deaths.value
        })
        this.setState({
            isLoading: false
        })
    }
    render(){
        const {cases, recovered, deaths, isLoading}  = this.state;
        if(isLoading){
            return(
                <div className="CS-Loading">
                    <img src={loading} alt="Loading" />
                </div>
            )
        }else{
        return(
            <div className="CoronaStats">
                <div className="CS-headings">
                    <h1>Pakistan <span>Corona</span> Cases</h1>
                    <span className="Strips"></span>
                </div>
                <div className="CS-cases-details">
                    <div className="CS-cases">
                        <div className="case-overlay">
                            <h1>Total Cases</h1>
                            <i class="fas fa-lock"></i>
                        </div>
                    <i className="fas fa-viruses"></i>
                        <h1>{cases}</h1>
                    </div>
                    <div className="CS-cases">
                    <div className="case-overlay">
                    <h1>Recovered</h1>
                    <i class="fas fa-lock"></i>
                    </div>
                    <i className="fas fa-walking"></i>
                        <h1>{recovered}</h1>
                    </div>
                    <div className="CS-cases">
                    <div className="case-overlay">
                    <h1>Deaths</h1>
                    <i class="fas fa-lock"></i>
                    </div>
                    <i className="fas fa-skull-crossbones"></i>
                        <h1>{deaths}</h1>
                    </div>
                </div>

            </div>
        ) }
    }
}

export default CoronaStats;
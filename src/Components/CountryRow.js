import React,{ Component } from 'react';
import axios from 'axios';
import loader from '../images/loader.gif';
import '../Stylesheets/CountryRow.css';

class CountryRow extends Component{
    static defaultProps = {
        country: 'Pakistan'
    }
    constructor(props){
        super(props);

        this.state= {
            name: '',
            totalCases: '',
            recovered: '',
            deaths: '',
            isLoading: false
        }
    }   


    async componentDidMount(){
        this.setState({
            isLoading: true
        })
        const countryData = await axios.get(`https://covid19.mathdro.id/api/countries/${this.props.country}`);
        this.setState({
            name: this.props.country,
            totalCases: countryData.data.confirmed.value,
            recovered: countryData.data.recovered.value,
            deaths: countryData.data.deaths.value

        })
        this.setState({
            isLoading: false
        })
    }

    render(){
        const {name, totalCases, recovered, deaths, isLoading} = this.state;
        if(isLoading){
            return(
                <div className="CR-loading">
                    <img src={loader} alt="Loading..."/>
                </div>
            )
        }else{
            return(
                <tr>
                    <td className="td-name">{name}</td>
                    <td className="td-cases">{totalCases}</td>
                    <td className="td-recovered">{recovered}</td>
                    <td className="td-deaths">{deaths}</td>
                </tr>
            )
        }
        
    }
}

export default CountryRow;
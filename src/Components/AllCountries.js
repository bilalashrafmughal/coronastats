import React, {Component} from 'react'
import axios from 'axios';
import loading from '../images/loader.gif';
import '../Stylesheets/AllCountries.css';
import CountryRow from './CountryRow';
class AllCountries extends Component{

    constructor(props){
        super(props);
        this.state = {
            countries: [],
            isLoading: false,
            searched: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    async componentDidMount(){
        this.setState({
            isLoading: true
        })
        const countriesName = await axios.get('https://covid19.mathdro.id/api/countries/');
        this.setState({
            countries: countriesName.data.countries
        })
        this.setState({
            isLoading:false
        })
    }
    handleChange(evt){
        evt.preventDefault();
        this.setState({
            searched: evt.target.value
        })
    }

    render(){
        const {isLoading, searched} = this.state;
        if(isLoading){
            return(
                <div className="CS-Loading">
                    <img src={loading} alt="Loading" />
                </div>
            )
        }else{
        return(
            <div className="AllCountries-wrapper">
                <h1>Corona <span>Infacated</span> Countries</h1>
                <input onChange={this.handleChange} type="text" name="search" placeholder="Search Country" />
            <div className="AllCountries">
                <table className="AllCountries-table">
                    <thead>
                    <th>Country Name</th>
                    <th>Total Cases</th>
                    <th>Recovered</th>
                    <th>Death</th>
                    </thead>
                    <tbody>
                        {searched !== '' ? <CountryRow key={searched} country={searched}/> :
                        this.state.countries.map(country => <CountryRow key={country.name} country={country.name}/>)
                        }
                    
                    </tbody>
            </table>
            </div>
            </div>
        )
        }
        }
    }
    export default AllCountries;
    // 
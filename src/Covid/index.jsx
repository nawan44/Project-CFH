import React from 'react';
import CovidService from './service';
import './covid.css';

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            dataCovid: []
        }
    }
    loadData = async () => {
        const dataAPI = await CovidService.summary();

        this.setState({
            dataCovid: dataAPI.Countries
        });
        console.log(this.state.dataCovid)
    }

    componentDidMount() {
        this.loadData();
    }
    render() {

        return (<div>
            <h1>Data Covid</h1>
            <table className="table table-hover">
                <tr>
                    <th>Country</th>
                    <th>Date</th>
                    <th>New Confirmed</th>
                    <th>New Deaths</th>
                    <th>New Recovered</th>
                    <th>Slug</th>
                    <th>Total Confirmed</th>
                    <th>Total Deaths</th>
                    <th>Total Recovered</th>
                </tr>
                {
                    this.state.dataCovid.map(data => {
                        return(
                            <tr>
                                <td>{data.Country}</td>
                                <td>{data.Date}</td>
                                <td>{data.NewConfirmed}</td>
                                <td>{data.NewDeaths}</td>
                                <td>{data.NewRecovered}</td>
                                <td>{data.Slug}</td>
                                <td>{data.TotalConfirmed}</td>
                                <td>{data.TotalDeaths}</td>
                                <td>{data.TotalRecovered}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>)
    }
}
export default Index
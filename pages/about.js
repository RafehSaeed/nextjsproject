import Layout from '../components/nav/Layout'

export default class AboutPage extends React.Component {
  static async getInitialProps({query}) {
    // console.log('-----------');
    // console.log(query);
    // console.log('-----------');
    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { query }
  }

  render() {

    if(this.props.query.weather == null){


      var CurrentTempAndLoc = (<h1>Ooops!</h1>);
      var DailyTemp = (<div>No Valid City Found, Try Again!</div>)


    }else {
      const weatherForecast = this.props.query.weather.forecast;
      var CurrentTempAndLoc = (<div><h1>Weather for {this.props.query.weather.location.name}</h1>
            <h4>Currently {this.props.query.weather.current.temperature} C and {this.props.query.weather.current.skytext}</h4></div>);

      var DailyTemp = weatherForecast.map( rows => {
        console.log(rows);
        return (
          <div key={rows.date} className="results-flex-row">
            <div>Date: {rows.date}</div>
            <div>{rows.skytextday}</div>
            <div>Low of {rows.low} C</div>
            <div>High of {rows.high} C</div>
          </div>
        )

      });
    }

    return (
    <Layout>
      <div className='wrapper'>
        <div className='wrapper-contained'>
         <div className='weather-container'>
          {CurrentTempAndLoc}
          <div className="weather-grid">
            {DailyTemp}
          </div>
         </div>
        </div>
      </div>
    </Layout>
    )
  }
}

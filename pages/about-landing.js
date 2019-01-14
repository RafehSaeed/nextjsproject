import Link from 'next/link'
import Layout from '../components/nav/Layout'
// Class About

export default class AboutLanding extends React.Component {
  static async getInitialProps({query}) {
    // console.log('-----------');
    // console.log(query);
    // console.log('-----------');
    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { query }
  }

  render() {


    return (
        <Layout>
            <div className='wrapper'>
                <style jsx>{`
                `}</style>

            <div className="container">
                <div className='wrapper-contained'>
                    <div className='weather-container'>
                        <h3>Try entering a city /about/[City Name]</h3>
                    </div>
                </div>
            </div>
      </div>
    </Layout>
    )
  }
}

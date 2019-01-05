import Link from 'next/link'
import Header from '../components/nav/Header'
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
                .container {
                    z-index: 2;
                    overflow: hidden;
                    width: calc(100% - 40px);
                    margin: 0 auto;
                    position: relative;
                  }
                  .hero-wrapper {
                    position: relative;
                  }
                  .left-side {
                    float: left;
                    // padding-top: 150px;
                    width: 50%;
                    display: inline-block
                  }
                  .intro-text {
                    margin-left: 30%;
                    width: 80%;
                    margin-top: 75px;
                    font-weight: 700;
                    font-size: 33px;
                  }
                  .body-text {
                    box-sizing: border-box;
                    clear: both;
                    width: 100%;
                    margin: 0 auto;
                    display: block;
                    padding: 10px;
                    padding-bottom: 60px;
                    padding-left: 0;
                    margin-left: 15%;
                    margin-top: 25px;
                    font-weight: 500;
                    font-size: 16px;
                    color: #777;
                    line-height: 1.43;
                  }

                  @media screen and (min-width: 768px) {
                    .left-side {
                      float: left;
                      padding-top: 150px;
                      width: 70%;
                      display: inline-block
                    }
                    .intro-text {
                      margin-left: 20%;
                      margin-top: 75px;
                      font-weight: 700;
                      font-size: 63px;
                    }
                    .body-text {
                      box-sizing: border-box;
                      clear: both;
                      width: 70%;
                      margin-left: 14%;
                      display: inline-block;
                      margin-top: 50px;
                      font-weight: 500;
                      font-size: 23px;
                      color: #777;
                      padding: 0;
                    }
                  }
                  @media screen and (min-width: 1024px) {
                    .left-side {
                      float: left;
                      padding-top: 150px;
                      width: 50%;
                      display: inline-block
                    }
                    .intro-text {
                      margin-left: 20%;
                      margin-top: 75px;
                      font-weight: 700;
                      font-size: 63px;
                    }
                    .body-text {
                      box-sizing: border-box;
                      clear: both;
                      width: 60%;
                      margin-left: 10%;
                      display: inline-block;
                      margin-top: 50px;
                      font-weight: 500;
                      font-size: 23px;
                      color: #777;
                      padding: 0;
                    }
                  }
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

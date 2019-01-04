import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'


// Index.getInitialProps = async function(query) {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()
//
//   // console.log(data);
//   console.log(`Show data fetched. Count: ${data.length}`)
//
//   return {
//     shows: data
//   }
// }

class Index extends React.Component {
	constructor(props) {
		super(props);
	}

	static async getInitialProps({query}) {

	  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
	  const data = await res.json()

		//WORKS should return some data from ^^ API
	  // return {
	  //   shows: data
	  // }
		// Try inside componentDidMount function console.log shows

		return { query }
	}

	componentDidMount() {

		console.log(this.props);

	}


	render(){
		return (
			<Layout>
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
				{/* <span className="white-square"></span> */}
				<div className="hero-wrapper">
					<div className="left-side">
						<div className="intro-text">Check us out again shortly.</div>

					</div>
				</div>
				<div className="body-text">We are currently under construction. :(</div>
			</div>

			</Layout>
		)
	}
}




export default Index

import Link from 'next/link'
import Header from '../components/nav/Header'
import Layout from '../components/nav/Layout'
import Clock from '../components/Clock'
import fetch from 'isomorphic-unfetch'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
    		categories: []
		};

	}

	static async getInitialProps({query}) {

		console.log(query)

		return { query }
	}

	async componentDidMount() {
		this.props.store.start()

		this.setState({
				categories: this.props.query

		});

	}

  componentWillUnmount() {
    this.props.store.stop()
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

				{/* ///Pulling name from the MOBX store => Check HomeStore */}
				{/* ///Check HomeStore for getName function*/}
				<div className="body-text">{this.props.store.getName} we are currently under construction. :(</div>
				

				{/*Categories */}
				<div className="body-text">
					<div>
						{this.props.query.map( category => 
							<div style={{border: 'solid'}}>
								<div>{category.category_id}</div>
								<div>{category.categoryName}</div>
							</div>

						)}	
					</div>
				</div>


			</div>

			{/* ///MOBX Component using observables */}
			<Clock
				lastUpdate={this.props.store.lastUpdate}
				light={this.props.store.light}
			/>

			</Layout>
		)
	}
}

export default Index




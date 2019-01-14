import Link from 'next/link'
import Header from '../components/nav/Header'
import Layout from '../components/nav/Layout'
import Clock from '../components/Clock'
import fetch from 'isomorphic-unfetch'
import { inject, observer } from 'mobx-react'
import "../static/scss/index.scss";

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
				<div className="container">
					{/* <span className="white-square"></span> */}
					<div className="hero-wrapper">
						<div className="left-side">
							<div className="intro-text">Check us out again shortly.</div>
						</div>
					</div>

					{/* ///Pulling name from the MOBX store => Check HomeStore
						* Check HomeStore for getName function*
						*/}

					<div className="body-text">{this.props.store.getName} we are currently under construction. :(</div>

					{/*Categories */}
					<div className="body-text">
						<div>
							{this.props.query.map( category =>
								<div style={{border: 'solid'}}>
									<div className="example">{category.category_id}</div>
									<div className="example">{category.categoryName}</div>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* ///MOBX Component using observables */}
				{/* <Clock
					lastUpdate={this.props.store.lastUpdate}
					light={this.props.store.light}
				/> */}

			</Layout>
		)
	}
}

export default Index

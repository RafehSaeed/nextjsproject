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
		return { query }
	}

	async componentDidMount() {
		this.props.store.start()

		this.setState({
				categories: this.props.query.categories
		}, function(){
			console.log(this);
		});


	}

  componentWillUnmount() {
    this.props.store.stop()
  }

	render(){

		const service = this.props.query.service[0];

		return (
			<Layout>
				<div className="container">

					<div className="view view-categories">

						<div><h2 className="view-title">{service.service_nm}</h2></div>


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

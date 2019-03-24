import Link from 'next/link'
import Header from '../components/nav/Header'
import Layout from '../components/nav/Layout'
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
		// console.log(this.props.query.services);

		this.setState({
				categories: this.props.query.categories
		}, function(){
			// console.log(this);
		});


	}

  componentWillUnmount() {
    this.props.store.stop()
  }

	render(){
		return (
			<Layout background="/static/backgrounds/tech.jpg">
				<div className="container">
					<span className="white-square"></span>
{/*
					<div className="body-text">{this.props.store.getName} we are currently under construction. :(</div> */}

					{/*Categories */}
					<div className="view view-categories">

						<div><h2 className="view-title">Browse the list of services available in your <span>city.</span></h2></div>

						<div className="view-wrapper">

							{this.props.query.categories.map( category =>
								<div key={category.category_id} className="views-row">
									<div className="field-title">{category.categoryname}</div>
								</div>
							)}

						</div>
						<div className="view-footer"><div className="view-more">View More Services</div></div>
					</div>


					<div className="view view-popular">

						<div className="view-wrapper"><h2 className="view-title">Popular Services</h2></div>

						<div className="view-wrapper">

							{this.props.query.services.map( service =>
							<Link key={service.service_id} href={`/service/${service.service_id}`}>
								<div className="views-row">
									<div className="field-image"><img src="/static/images/autorepair.jpg"/></div>
									<div className="field-rating">
										<img className="star-icon" src="/static/icons/star-icon.svg"/>
										<img className="star-icon" src="/static/icons/star-icon.svg"/>
										<img className="star-icon" src="/static/icons/star-icon.svg"/>
										<img className="star-icon" src="/static/icons/star-icon.svg"/>
										<img className="star-icon" src="/static/icons/star-icon.svg"/>
									</div>
									<div className="field-type">{service.category_nm}</div>
									<div className="field-title">{service.service_nm}</div>
								</div>
							</Link>
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

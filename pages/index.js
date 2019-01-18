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
				categories: this.props.query
		}, function(){
			console.log(this);
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

					{/* <div className="hero-wrapper">
						<div className="left-side">
							<div className="intro-text">Check us out again shortly.</div>
						</div>
					</div> */}
{/*
					<div className="body-text">{this.props.store.getName} we are currently under construction. :(</div> */}

					{/*Categories */}
					<div className="view view-categories">

						<div><h2 className="view-title">Browse the list of services available in your <span>city.</span></h2></div>

						<div className="view-wrapper">

							{this.props.query.map( category =>
								<div className="views-row">
									{/* <div className="example red">{category.category_id}</div> */}
									<div className="field-title">{category.categoryName}</div>
								</div>
							)}

						</div>
						<div className="view-footer"><div className="view-more">View More Services</div></div>
					</div>


					<div className="view view-categories view-popular">

						<div><h2 className="view-title">Popular Services</h2></div>

						<div className="view-wrapper">

							<div className="views-row">
								<div className="field-image"><img src="/static/images/autorepair.jpg"/></div>
								<div className="field-type">Auto Repairs</div>						<div className="field-title">Mexican Food Catering or Meal Plans</div>
							</div>
							<div className="views-row">
								<div className="field-image"><img src="/static/images/tools.jpg"/></div>
								<div className="field-type">Auto Maintenance</div>						<div className="field-title">Mexican Food Catering or Meal Plans</div>
							</div>
							<div className="views-row">
								<div className="field-image"><img src="/static/images/grooming.jpg"/></div>
								<div className="field-type">Men's Grooming</div>						<div className="field-title">Mexican Food Catering or Meal Plans</div>
							</div>
							<div className="views-row">
								<div className="field-image"><img src="/static/images/room.png"/></div>
								<div className="field-type">Home Repairs</div>						<div className="field-title">Mexican Food Catering or Meal Plans</div>
							</div>
							<div className="views-row">
								<div className="field-image"><img src="/static/images/trainer.jpg"/></div>
								<div className="field-type">Training & Fitness</div>						<div className="field-title">Mexican Food Catering or Meal Plans</div>
							</div>
							<div className="views-row">
								<div className="field-image"><img src="/static/images/catering.jpg"/></div>
								<div className="field-type">Mexican Food Catering or Meal Plans</div>
								<div className="field-title">Mexican Food Catering or Meal Plans</div>
							</div>

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

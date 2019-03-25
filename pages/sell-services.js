import Link from 'next/link'
import Header from '../components/nav/Header'
import Layout from '../components/nav/Layout'
// import Clock from '../components/Clock'
import AccordionBlock from '../components/blocks/AccordionBlock'
import MapBlock from '../components/blocks/MapBlock'
// import fetch from 'isomorphic-unfetch'
import { inject, observer } from 'mobx-react'
import { Form, Input, TextArea, Button, Select, Rating } from 'semantic-ui-react'
import {
    DateInput, TimeInput, DatesRangeInput } from 'semantic-ui-calendar-react';



@inject('store')
@observer
class Index extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
    		categories: [],
				optionsType: [ //options for drop down select
					{ key: 'a', text: 'Android Device', value: 'Android Device' },
					{ key: 'i', text: 'iPhone X', value: 'iPhone X' },
					{ key: 'i2', text: 'iPhone 8+', value: 'iPhone 8+' },
				],
				additionalOptions: [ //options for drop down select
					{ key: 'yes', text: 'Yes (+ $20)', value: 'Yes (+20$)' },
					{ key: 'no', text: 'No (+ $0)', value: 'No (+ $0)' },
				],
				location: {
					center: {
						lat: 45.506718,
						lng: -73.579611
					},
					zoom: 15,
				},
				time: '',
				date: ''

		};
	}

	static async getInitialProps({query}) {
		return { query }
	}

	async componentDidMount() {
		this.props.store.start()


		// console.log(this.props.store);

		// this.setState({
		// 		categories: this.props.query.categories
		// }, function(){
		// 	// console.log(this);
		// });


	}

	handleChange = (event, {name, value}) => {
		if (this.state.hasOwnProperty(name)) {
			this.setState({ [name]: value });
		}
	}

  componentWillUnmount() {
    this.props.store.stop()
  }

	render(){

		// const service = this.props.query.service[0];

		//example use of dynamic props for compoennt

		return (
			// <Layout background="/static/backgrounds/night.jpg">
			<Layout>
				<div className="container basic-page">

					<div>
							<div className="field-image">
								<img className="hero-image" src="/static/backgrounds/city.jpg"/>
							</div>

							<div className="page-without-sidebar">

								<main className="content-region">
									<h1 className="field-title">Become a Services Provider On Our Platform</h1>
									<div className="field-body-text">
									<p>The apartment is large and with lots of sunlight through the big windos and 5 balconies. There are 3 rooms, a small, middle and a large. In addition, there is two loft rooms under the roof with half height, furnished with beds. The apartment is large and with lots of sunlight through the big windos and 5 balconies. There are 3 rooms, a small, middle and a large. In addition, there is two loft rooms under the roof with half height, furnished with beds.</p>

									<p>The apartment is large and with lots of sunlight through the big windos and 5 balconies. There are 3 rooms, a small, middle and a large. In addition, there is two loft rooms under the roof with half height, furnished with beds. In addition, there is two loft rooms under the roof with half height, furnished with beds.</p>
									<p>The apartment is large and with lots of sunlight through the big windos and 5 balconies. There are 3 rooms, a small, middle and a large. In addition, there is two loft rooms under the roof with half height, furnished with beds. The apartment is large and with lots of sunlight through the big windos and 5 balconies. There are 3 rooms, a small, middle and a large. In addition, there is two loft rooms under the roof with half height, furnished with beds. Loft rooms under the roof with half height, furnished with beds. The apartment is large and with lots of sunlight through the big windos and 5 balconies. There are 3 rooms, a small, middle and a large. In addition, there is two loft rooms under the roof with half height, furnished with beds. The apartment is large and with lots of sunlight through the big windos and 5 balconies. There are 3 rooms, a small, middle and a large. In addition, there is two loft rooms under the roof with half height, furnished with beds. Loft rooms under the roof with half height, furnished with beds.</p>
									<p>The apartment is large and with lots of sunlight through the big windos and 5 balconies. There are 3 rooms, a small, middle and a large. In addition, there is two loft rooms under the roof with half height, furnished with beds. The apartment is large and with lots of sunlight through the big windos and 5 balconies. There are 3 rooms, a small, middle and a large. In addition, there is two loft rooms under the roof with half height, furnished with beds.</p>

									<p>The apartment is large and with lots of sunlight through the big windos and 5 balconies. There are 3 rooms, a small, middle and a large. In addition, there is two loft rooms under the roof with half height, furnished with beds. In addition, there is two loft rooms under the roof with half height, furnished with beds.</p>
									</div>
								</main>

							</div>
					</div>
				</div>

				{/* <Clock
					lastUpdate={this.props.store.lastUpdate}
					light={this.props.store.light}
				/> */}

			</Layout>
		)
	}
}

export default Index

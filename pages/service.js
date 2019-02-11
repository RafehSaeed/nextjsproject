import Link from 'next/link'
import Header from '../components/nav/Header'
import Layout from '../components/nav/Layout'
import Clock from '../components/Clock'
import AccordionBlock from '../components/blocks/AccordionBlock'
import MapBlock from '../components/blocks/MapBlock'
import fetch from 'isomorphic-unfetch'
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

		this.setState({
				categories: this.props.query.categories
		}, function(){
			// console.log(this);
		});


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

		const service = this.props.query.service[0];

		//example use of dynamic props for compoennt

		return (
			<Layout>
				<div className="container">

					<div className="service-type-single">
							<div className="field-image">
								<img className="hero-image" src="/static/images/service1image.jpeg"/>
							</div>

							<div className="page-with-sidebar">

								<main className="content-region">
									<h2 className="field-title">{service.service_nm}</h2>
									<div className="field-category">{service.category_nm}</div>
									<div className="field-body-text">The apartment is large and with lots of sunlight through the big windos and 5 balconies. There are 3 rooms, a small, middle and a large. In addition, there is two loft rooms under the roof with half height, furnished with beds. The apartment is large and with lots of sunlight through the big windos and 5 balconies. There are 3 rooms, a small, middle and a large. In addition, there is two loft rooms under the roof with half height, furnished with beds.
									<br></br>
									<br></br>
									The apartment is large and with lots of sunlight through the big windos and 5 balconies. There are 3 rooms, a small, middle and a large. In addition, there is two loft rooms under the roof with half height, furnished with beds. In addition, there is two loft rooms under the roof with half height, furnished with beds.
									<br></br>
									<br></br>
									The apartment is large and with lots of sunlight through the big windos and 5 balconies. There are 3 rooms, a small, middle and a large. In addition, there is two loft rooms under the roof with half height, furnished with beds. 									The apartment is large and with lots of sunlight through the big windos and 5 balconies. There are 3 rooms, a small, middle and a large. In addition, there is two loft rooms under the roof with half height, furnished with beds. Loft rooms under the roof with half height, furnished with beds.</div>


									<div className="field-location">
										<h2>Address</h2>
										<MapBlock {...this.state.location}/>
									</div>

									<div className="field-accordion">
										<h2>Important Information & Policies</h2>
										<AccordionBlock/>
									</div>



								</main>

								<aside className="sidebar">
									<div className="field-price">{service.service_price}</div>
									<div className="field-rating">
										<Rating icon='star' defaultRating={3} maxRating={5} /> <div className="total-ratings">(243)</div>
									</div>

									<Form>
										<div className="field-input">
											<label>Date</label>
											<DateInput
												name="date"
												placeholder="Date"
												value={this.state.date}
												iconPosition="left"
												onChange={this.handleChange}
												closable
												readOnly
											/>
									  </div>
										<div className="field-input">
											<label>Time</label>
											<TimeInput
												closable
												name="time"
												timeFormat="AMPM"
												placeholder="Time"
												value={this.state.time}
												iconPosition="left"
												onChange={this.handleChange}
												closable
												readOnly
											/>
										</div>

									</Form>
									<Form>
										<Form.Group widths='equal'>
											<Form.Field
												control={Select}
												options={this.state.optionsType}
												label={{ children: 'Type', htmlFor: 'form-select-control-gender' }}
												placeholder='Select an option'
												search
												searchInput={{ id: 'form-select-control-gender' }}
												readOnly={true}
											/>
										</Form.Group>
										<Form.Group widths='equal'>
											<Form.Field
												control={Select}
												options={this.state.additionalOptions}
												label={{ children: 'Purchase A Screen Protector', htmlFor: 'form-select-control-additional-options' }}
												placeholder='Yes or No'
												search
												searchInput={{ id: 'form-select-control-addition-options' }}
												readOnly={true}
											/>
										</Form.Group>
										<div className="field info">
											<label>Delivery Time: <span>1-3 Hours</span></label>
										</div>
										<div className="field info">
											<label>Mobile Vendor: <span>No</span></label>
										</div>
										<div className="field info">
											<label>Charge by the: <span>Job</span></label>
										</div>
										<Form.Field
											id='form-button-control-public'
											control={Button}
											content='Book Now'
											label='If you are ready click on "Book Now"'
										/>
									</Form>
								</aside>

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

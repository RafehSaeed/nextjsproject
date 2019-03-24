import Layout from '../components/nav/Layout'
import { Form, Input, TextArea, Button, Select, Rating } from 'semantic-ui-react'
import validator from 'validator';

export default class RegisterPage extends React.Component {

  constructor(props) {
    super(props);
		this.state = {
			first_name: '',
			last_name: '',
			email_addr: '',
			password: '',
			user_type: '',
		};
  }
  

  static async getInitialProps({query}){
  	return { query }
  }


	componentDidMount(){

		let formData = {};

		// Apply validation to the form here
		var applyFormValidation = () => {
			$('.ui.form').form({
					fields: {
					  first_name: {
						identifier: 'first_name',
						rules: [
						          {
						            type   : 'empty',
						            prompt : 'Please enter your first name'
						          }
						        ]
							},
					  last_name: {
						identifier: 'last_name',
						rules: [
						          {
						            type   : 'empty',
						            prompt : 'Please enter your last name'
						          }
						        ]
							},
						password:  {
					        identifier: 'password',
					        rules: [
					          {
					            type   : 'empty',
					            prompt : 'Please enter a password'
					          },
					          {
					            type   : 'minLength[6]',
					            prompt : 'Your password must be at least {ruleValue} characters'
					          }
					        ]
					      },
						email_addr:  {
					        identifier: 'email_addr',
					        rules: [
					          {
					            type   : 'email',
					            prompt : 'Please enter a valid emaill address'
					          }
					        ]
					      }
					}
				});

			$( "#register_btn" ).click(n => {
			    formData = $('.ui.form').form('get values');
					this.setState(formData); 
					if( $('.ui.form').form('is valid')) {
						console.log(this.state)
						alert("Thanks for submitting!");
					}
			
			});
		}

		applyFormValidation();
	}
 

	onFieldChange(event){
		$('.ui.form')
		.form('set value', [event.target.name], event.target.value)
	}

  render() {
    const userTypes =  [ //options for drop down select
					{ key: 'select', text: 'Select', value: '' },
					{ key: 'reg', text: 'Regular User', value: 'reg' },
					{ key: 'sp', text: 'Service Provider', value: 'sp' },
				]
		return (
			<Layout background="/static/backgrounds/person.jpg">
				<div className="container">
					<div className="user-on-boarding">
						<div className="view registration-form">
							<h2 className="title">Register <span>Now</span></h2>
							<Form>
									<Form.Field onChange={this.onFieldChange} label='First Name' id="first_name" name="first_name" placeholder="First Name"  control='input' type='text'/>
									<Form.Field onChange={this.onFieldChange}  label='Last Name' id="last_name" name="last_name" placeholder="Last Name"   control='input' type='text' />
									<Form.Field onChange={this.onFieldChange}  label='Email Address' id="email_addr" name="email_addr" placeholder="Email "   control='input' type='text' />
									<Form.Field onChange={this.onFieldChange}  label='Password' id="password" name="password"  control='input'  type='password' />
									<Form.Field label='User Type' id="user_type" name="user_type" control={Select}  value={this.state.usr_type} options={userTypes}/>
									<Form.Checkbox label='I agree to the Terms and Conditions' />
									<div class="ui error message"/>
									<Form.Field positive content="Register" id="register_btn"  control={Button}/>

							</Form>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}

import Layout from '../components/nav/Layout'
import { Form, Input, TextArea, Button, Select, Rating } from 'semantic-ui-react'
import validator from 'validator';
import Link from 'next/link'

export default class LoginPage extends React.Component {

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
		// Applies validation to the registration form
		// Arrow function for maintaining context for "this"
		var applyFormValidation = () => {
			$('.ui.form')
			  .form({
			    fields: {
			      first_name     : 'empty',
			      last_name   : 'empty',
			      email_addr : 'empty',
			      password : ['minLength[6]', 'empty'],
			      user_type : 'empty'
			    }
			  });

			$( "#register_btn" ).click(n => {
			    event.preventDefault();
			    formData = $('.ui.form').form('get values');
					this.setState(formData, console.log(this.state)); 
					alert("Thanks for submitting!");
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
			<Layout background="/static/backgrounds/tech.jpg">
				<div className="container">
					<div className="user-on-boarding">
						<div className="view registration-form">
							<h2 className="title">Log-in to Jolt</h2>
							<Form>
									<Form.Field onChange={this.onFieldChange}  label='Email Address' id="email_addr" name="email_addr" placeholder="Email "   control='input' type='text' />
									<Form.Field onChange={this.onFieldChange}  label='Password' id="password" name="password"  control='input'  type='password' />
								<Form.Field  />
								<div>Not currently a member?
									<Link href="/register">
										<a> Click here to sign-Up!</a>
									</Link> 
								</div>
								<br></br>
								<Form.Checkbox label='Remember me for 30 days' />
								<Button positive content="Register" id="register_btn"  control={Button}>Continue with my email</Button>
							</Form>
						</div>
					</div>
				</div>
			</Layout>
		)
  }
}

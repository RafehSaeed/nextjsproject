import Layout from '../components/nav/Layout'
import { Form, Input, TextArea, Button, Select, Rating } from 'semantic-ui-react'

export default class RegisterPage extends React.Component {

  static async getInitialProps({query}) {
  	return { query }
  }


  componentDidMount(){

  		// Applies validation to the registration form
  		function applyFormValidation() {
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
  		}	
  		applyFormValidation();
  }

  render() {
    const userTypes =  [ //options for drop down select
					{ key: 'select', text: 'Select', value: '' },
					{ key: 'reg', text: 'Regular User', value: 'reg' },
					{ key: 'sp', text: 'Service Provider', value: 'sp' },
				]
	return (
		<Layout>
			<div className="container">
				<div className="view view-categories">
					<div className="view-wrapper form-fields">
						<Form>
							<h2 className="registration-title">Register <span>now</span></h2>
							<Form.Field label='First Name' id="first_name" name="first_name" placeholder="First Name" control='input' type='text' />
							<Form.Field label='Last Name' id="last_name" name="last_name" placeholder="Last Name" control='input' type='text' />
							<Form.Field label='Email Address' id="email_addr" name="email_addr" placeholder="Email " control='input' type='text' />
							<Form.Field label='Password' id="password" name="password"  control='input' type='password' />
							<Form.Field label='User Type' id="user_type" name="user_type" control={Select} options={userTypes}/>
							<Form.Field content="Register" id="register" control={Button} />
						</Form>
					</div>
				</div>
			</div>
		</Layout>
	)
  }
}

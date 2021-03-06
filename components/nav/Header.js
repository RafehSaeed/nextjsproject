import Link from 'next/link'
// import "../static/scss/index.scss";

const linkStyle = {
	default: {
		marginRight: 35,
		textDecoration: 'none'
	},
	bold: {
		marginRight: 15,
		fontWeight: 700,
		textDecoration: 'none',
		color: '#3D4146'
	}
}

const Header = () => (

	<div className="header-container">
		<header>
  {/*  	<Link href="/">*/}<a href='/'><span className="logo-branding">Jolt</span></a>{/*</Link>*/}
    	<div className="main-menu">
	      {/*<Link href="/register">*/}
	        <a href="/register" style={linkStyle.default}>Sign-up</a>
	      {/*</Link>*/}
	      {/*<Link href="/login">*/}
	        <a href="/login" style={linkStyle.default}>Login</a>
					<a href="/sell-services" style={linkStyle.bold}>Sell Services</a>
					<a href="/browse" style={linkStyle.default}>Browse</a>
	    </div>
		</header>
  </div>
)

export default Header

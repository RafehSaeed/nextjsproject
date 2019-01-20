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
    	<Link href="/"><a><span className="logo-branding">Jolt</span></a></Link>
    	<div className="main-menu">
	      <Link href="/">
	        <a style={linkStyle.default}>Sign-up</a>
	      </Link>
	      <Link href="/sign-up">
	        <a style={linkStyle.default}>Login</a>
	      </Link>
	      <Link href="/map">
	        <a style={linkStyle.bold}>Become A Service Provider</a>
	      </Link>
	    </div>
		</header>
  </div>
)

export default Header

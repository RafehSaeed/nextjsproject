import Link from 'next/link'

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

		<style jsx>{`
      .header-container {
      	box-sizing: border-box;
      	// max-width: 90%;
      	margin: 0;
      	width: 100%;
      	min-height: 80px;
      	margin: 0 auto;
      	background-color: #2CACFB;
      	background-color: #FFF;
      	color: white;
      	padding: 20px;
				// border: 1px solid #DDD;
				-webkit-box-shadow: 2px 5px 20px -13px rgba(0,0,0,0.55);
				-moz-box-shadow: 2px 5px 20px -13px rgba(0,0,0,0.55);
				box-shadow: 2px 5px 20px -13px rgba(0,0,0,0.55);
      }
      .header-container a {
      	color: white;
				color: #2CACFB;
      }
      .logo-branding {
				color: #FB5C64;
      	// margin-top
      	font-size: 36px;
      	font-weight: bold;
      	float: left;
      }
      .main-menu {
      	text-align:center;
      	display: inline-block;
      	width 100%;
      	margin-top: 20px;
      }
			.main-menu a {
				color: #a9a9a9;
			}
			@media screen and (min-width: 565px) {
			  .header-container {
			    // background-color: #102D64;
			  }
				.main-menu {
					text-align:right;
					display: inline-block;
					width 50%;
					// background-color: white;
					float: right;
					margin-top:20px;
				}
			}
    `}</style>

    	<Link href="/"><a><span className="logo-branding">Jolt</span></a></Link>

    	<div className="main-menu">
	      <Link href="/">
	        <a style={linkStyle.default}>Home</a>
	      </Link>
	      <Link href="/sign-up">
	        <a style={linkStyle.default}>About</a>
	      </Link>
	      <Link href="/map">
	        <a style={linkStyle.bold}>View MAP</a>
	      </Link>

	    </div>
    </div>
)

export default Header

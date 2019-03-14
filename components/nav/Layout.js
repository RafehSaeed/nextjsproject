import Header from './Header';
import Footer from './Footer';
import Head from 'next/head'
import "../../static/scss/index.scss";

const Layout = (props) => {

	//conditional rendering of components SHOW OR HIDE FOOTER
	var hiddenOverflow = '';
	var background = '';

	if(props.overflow == true){

		hiddenOverflow = 'overflow: hidden;';
	}else {
		hiddenOverflow = 'overflow: inherit';
	}

	if(props.background !== '' || props.background !== null){
		//sets the color or the background image
		background = props.background;
	}

	return (
		<div className="wrapper">
				<style jsx>{`
						div.wrapper {
							${hiddenOverflow};
							background-color: ${background};
							background-image: url('${background}');
							background-position: center;
							background-size: cover;
						}
					`}
				</style>

			<Head>
				<title>Jolt | The Quick Way To Find Services</title>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' key="viewport"/>
				<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"/>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
				<link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,400i,500,600,600i,700,800,900" rel="stylesheet"/>
				<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
				<script src="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js"></script>
			</Head>

			<Header/>
				{props.children}
			<Footer/>
		</div>)
}

export default Layout

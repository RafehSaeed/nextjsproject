import Header from './Header';
import Footer from './Footer';
import Head from 'next/head'

const Layout = (props) => {

	//conditional rendering of components SHOW OR HIDE FOOTER
	var hiddenOverflow = '';

	if(props.overflow == true){

		hiddenOverflow = 'overflow: hidden;';
	}else {
		hiddenOverflow = 'overflow: inherit';
	}

	return (<div className="wrapper">


		<style jsx>{`
      div.wrapper {
				position: relative;
      	box-sizing: border-box;
      	margin: 0;
      	width: 100%;
				height: 100%;
      	margin: 0 auto;
      	padding: 0px;
      	padding-top: 0;
      	background-color: #ececec;
				-webkit-box-shadow: 2px 5px 20px -13px rgba(0,0,0,0.55);
				-moz-box-shadow: 2px 5px 20px -13px rgba(0,0,0,0.55);
				box-shadow: 2px 5px 20px -13px rgba(0,0,0,0.55);
				font-family: 'Montserrat', sans-serif;
				background-image: url('/static/marker.svg');
				background-size: contain;
				background-position: 500px 800px;
				background-position: 600px bottom;
				background-repeat: no-repeat;
				padding-bottom: 120px;
				min-height: 100vh;
				${hiddenOverflow}
			}
    `}</style>

		<Head>
      <title>Jolt | The Quick Way To Find Services</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' key="viewport"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,400i,500,600,600i,700,800,900" rel="stylesheet"/>
    </Head>

		<Header/>

		{props.children}

		<Footer/>


	</div>)



}

export default Layout

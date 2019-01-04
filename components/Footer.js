import Link from 'next/link'

const linkStyle = {
	marginRight: 15
}

const Footer = () => (

    <div className="footer">
      <style jsx>{`
        .footer {
          position: absolute;
          bottom: -40px;
          bottom: 0px;
          background-color: white;
          margin-top: 40px;
          box-sizing: border-box;
          max-width: 100%;
          width: 100%;
          margin: 0 auto;
          padding: 15px;
          font-size: 16px;
          -webkit-box-shadow: 2px 5px 20px -13px rgba(0,0,0,0.55);
          -moz-box-shadow: 2px 5px 20px -13px rgba(0,0,0,0.55);
          box-shadow: 2px 5px 20px -13px rgba(0,0,0,0.55);
        }
        .footer p {
          font-size: 12px;
        }
        @media screen and (min-width: 768px) {
          .footer {
            padding: 15px;
            border: 1px solid #DDD;
          }
        }
        @media screen and (min-width: 920px) {
          .footer p {
            font-size: 16px;
          }
        }
      `}</style>

    	<p>Copyright Jolt 2018. All Rights Reserved.</p>

    </div>

)

export default Footer

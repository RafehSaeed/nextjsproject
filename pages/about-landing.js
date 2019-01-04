
// Class About

export default class AboutLanding extends React.Component {
  static async getInitialProps({query}) {
    // console.log('-----------');
    // console.log(query);
    // console.log('-----------');
    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { query }
  }

  render() {


    return (

      <div className='wrapper'>
        <style jsx>{`

          html, body, div, span, applet, object, iframe,
          h1, h2, h3, h4, h5, h6, p, blockquote, pre,
          a, abbr, acronym, address, big, cite, code,
          del, dfn, em, img, ins, kbd, q, s, samp,
          small, strike, strong, sub, sup, tt, var,
          b, u, i, center,
          dl, dt, dd, ol, ul, li,
          fieldset, form, label, legend,
          table, caption, tbody, tfoot, thead, tr, th, td,
          article, aside, canvas, details, embed,
          figure, figcaption, footer, header, hgroup,
          menu, nav, output, ruby, section, summary,
          time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
          }
          /* HTML5 display-role reset for older browsers */
          article, aside, details, figcaption, figure,
          footer, header, hgroup, menu, nav, section {
            display: block;
          }
          body {
            line-height: 1;
            margin: 0;
          }
          ol, ul {
            list-style: none;
          }
          blockquote, q {
            quotes: none;
          }
          blockquote:before, blockquote:after,
          q:before, q:after {
            content: '';
            content: none;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }

          /*********
          *
          * Start CSS Styles
          *
          **********/

          .wrapper {
            width: 100%;
            height: 100vh;
            background-color: white;
            font-family: 'Verdana', sans-serif;
          }

          .wrapper-contained {
            box-sizing: border-box;
            width: 80%;
            min-height: 475px;
            margin: 0 auto;
            margin-top: 100px;
            padding: 40px;
            background-color: #f7f7f7;
            -webkit-box-shadow: 0px 4px 2px -2px rgba(217,217,217,1);
            -moz-box-shadow: 0px 4px 2px -2px rgba(217,217,217,1);
            box-shadow: 0px 4px 2px -2px rgba(217,217,217,1);
            margin-bottom: 100px;
          }

          h1 {
            font-size: 36px;
          }

          h4 {
            margin-top: 20px;
            font-weight: 700;
          }

          .weather-grid {
             display: flex; /* or inline-flex */
             flex-directiokn: row;
             flex-wrap: wrap;
             justify-content: center;
             align-items: stretch;
          }
        `}</style>

        <div className='wrapper-contained'>
         <div className='weather-container'>
          <h3>Try entering a city /about/[City Name]</h3>
         </div>
        </div>
      </div>
    )
  }
}

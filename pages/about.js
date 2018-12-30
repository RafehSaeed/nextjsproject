
// Class About 

export default class extends React.Component {
  static async getInitialProps({query}) {

    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { query }
  }

  render() {
    return (
      <div>
       {this.props.query}
      </div>
    )
  }
}


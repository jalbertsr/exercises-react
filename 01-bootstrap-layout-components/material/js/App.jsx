class App extends React.Component {
  constructor () {
    super()
    this.state = {
      currentPage: 'home'
    }

    //this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (page) => {
    this.setState({
      currentPage: page
    })
  }
  render () {
    return (
      <div>
        <Navbar handleClick={this.handleClick} currentPage={this.state.currentPage}/>
        {(this.state.currentPage === 'home') ? <Jumbotron /> : ''}
        <Page currentPage={this.state.currentPage} />
      </div>
    )
  }
}

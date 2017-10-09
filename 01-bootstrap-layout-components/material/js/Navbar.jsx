class Navbar extends  React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a className='navbar-brand' href='#'>Brand</a>
          </div>
          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav'>
              <li className={this.props.currentPage === 'home' ? 'active' : ''} onClick={() => this.props.handleClick('home')}><a href='#'>Home <span className='sr-only'>(current)</span></a></li>
              <li className={this.props.currentPage === 'about' ? 'active' : ''} onClick={() => this.props.handleClick('about')}><a href='#'>About</a></li>
              <li className={this.props.currentPage === 'contact' ? 'active' : ''} onClick={() => this.props.handleClick('contact')}><a href='#'>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

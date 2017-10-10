class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.value)
    this.setState({ value: '' })
  }

  handleClick = (e) => {
    this.props.markAsDone(e.target.value)
  }

  render () {
    return (
      <div className='todolist not-done'>
        <h1>Todos</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.value} className='form-control add-todo' placeholder='Add todo' onChange={this.handleChange} />
        </form>
        <button id='checkAll' className='btn btn-success' onClick={() => this.props.markAll()}>Mark all as done</button>
        <hr />
        <ul id='sortable' className='list-unstyled'>
        {this.props.list.filter(task => {
          return task.status === false
        }).map((task, i) => {
          return ( 
            <li key={i} className='ui-state-default'>
              <div className='checkbox'>
                <label><input type='checkbox' value={task.id} onClick={this.handleClick} />{task.item}</label>
              </div>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

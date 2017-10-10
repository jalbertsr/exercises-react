class Done extends React.Component {
  constructor (props) {
    super(props)
  }

  handleClick = (e) => {
    this.props.deleteItem(e.currentTarget.dataset.id)
  }

  render () {
    return (
      <div className='todolist'>
        <h1>Already Done</h1>
        <ul id='done-items' className='list-unstyled'>
          {this.props.list.filter(task => {
            return task.status === true
          }).map((task, i) => {
            return (
              <li key={i} className='ui-state-default'>
                <div className='checkbox'>
                  <p> {task.item}</p>
                  <button>
                    <span data-id={task.id} onClick={this.handleClick} className='fa fa-trash-o' aria-hidden='true' />
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

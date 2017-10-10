class Done extends React.Component {
  constructor (props) {
    super(props)
  }

  handleClick = (e) => {
    console.log('borrar')
    this.props.deleteItem(e.target.value)
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
                  <p value={task.id}> {task.item}</p><span><i onClick={this.handleClick} className='fa fa-trash-o' aria-hidden='true' /></span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

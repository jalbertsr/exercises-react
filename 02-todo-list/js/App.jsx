class App extends React.Component {
  constructor () {
    super()
    this.state = {
      list: [{ 
        id: +new Date(),
        item: 'xocolata', 
        status: false
      }]
    }
  }

  addItem = newItem => {
    this.setState({
      list: [...this.state.list, { id: +new Date(), item: newItem, status: false }]
    })
  }

  markAllAsCompleted = () => {
    this.setState({
      list: this.state.list.map(task => {
        task.status = true
        return task
      })
    })
  }

  markAsDone = id => {
    this.setState({
      list: this.state.list.map(task => {
        if (id == task.id) task.status = true
        return task
      })
    })
  }

  removeTask =id => {
    this.setState({
      list: this.state.list.filter(task => id !== task.id)
    })
  }

  render () {
    return (
      <div>
        <Todo addItem={this.addItem} list={this.state.list} markAsDone={this.markAsDone} markAll={this.markAllAsCompleted}/>
        <Done list={this.state.list} deleteItem={this.removeTask}/>
      </div>
    )
  }
}

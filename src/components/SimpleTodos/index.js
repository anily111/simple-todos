import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    newTodoInput: '',
  }

  onDeleteFun = id => {
    const {todosList} = this.state
    const filteredTodos = todosList.filter(eachItem => eachItem.id !== id)
    this.setState({todosList: filteredTodos})
  }

  changeInputTodo = event => {
    this.setState({newTodoInput: event.target.value})
  }

  addButtonClicked = () => {
    const {newTodoInput, todosList} = this.state
    const newTodo = {id: todosList.length + 1, title: newTodoInput}
    this.setState(prevState => ({
      todosList: [...prevState.todosList, newTodo],
      newTodoInput: '',
    }))
  }

  render() {
    const {todosList, newTodoInput} = this.state
    return (
      <div className='bg-container'>
        <div className='todo-container'>
          <h1 className='heading'>Simple Todos</h1>
          <div className='input-todo-container'>
            <input
              type='text'
              value={newTodoInput}
              className='todo-input'
              onChange={this.changeInputTodo}
            />
            <button
              type='button'
              className='add-button'
              onClick={this.addButtonClicked}
            >
              Add
            </button>
          </div>
          <ul className='list-container'>
            {todosList.map(item => (
              <TodoItem
                key={item.id}
                details={item}
                onClickEvent={this.onDeleteFun}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos

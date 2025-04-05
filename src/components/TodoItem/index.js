import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    editTitle: this.props.details.title,
    isEditClicked: false,
    isTodoCompleted: false,
  }

  changeInputTitle = event => {
    this.setState({editTitle: event.target.value})
  }

  editClicked = () => {
    this.setState(prevState => ({isEditClicked: !prevState.isEditClicked}))
  }

  changeTodoCompleted = () => {
    this.setState(prevState => ({isTodoCompleted: !prevState.isTodoCompleted}))
  }

  render() {
    const {editTitle, isEditClicked, isTodoCompleted} = this.state
    const {details, onClickEvent} = this.props
    const {id} = details
    const todoCompled = isTodoCompleted && 'todo-completed'
    return (
      <li className="list-item">
        <input
          type="checkbox"
          id={editTitle}
          value={editTitle}
          name="title"
          checked={isTodoCompleted ? true : false}
          onChange={this.changeTodoCompleted}
        />
        {isEditClicked ? (
          <input
            value={editTitle}
            onChange={this.changeInputTitle}
            className="edit-title-input"
          />
        ) : (
          <p className={`title ${todoCompled}`}>{editTitle}</p>
        )}
        <button
          type="button"
          className="del-button"
          onClick={() => onClickEvent(id)}
        >
          Delete
        </button>
        <button
          type="button"
          className="edit-save-button"
          onClick={this.editClicked}
        >
          {isEditClicked ? 'Save' : 'Edit'}
        </button>
      </li>
    )
  }
}

export default TodoItem

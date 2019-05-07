import React, {Component} from 'react'
import {connect} from 'react-redux'
import {add_todo} from '../actions'
import uuid from 'uuid';

class AddTodo extends Component {
  render() {
    const {addTodo} = this.props
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          if(this.input.value){
            addTodo(uuid(), this.input.value)
            this.input.value=''
          }
        }}>
          <input type ="text"
          ref={
            (node) => {
              this.input = node
            }
          }></input>
          <button type='submit'>添加到待办事项</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (id, newTodo) => {
      dispatch(add_todo(id, newTodo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)

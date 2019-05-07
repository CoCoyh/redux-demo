import React, {Component} from 'react'
import {connect} from 'react-redux'
import {toggle_todo} from '../actions'

const filterList = (list, filter) => {
  if (filter==='all') {
    return list
  }
  if (filter==='done') {
    return list.filter((todo) => todo.isDone)
  }
  if (filter==='doing') {
    return list.filter((todo) => !todo.isDone)
  }
}

class TodoList extends Component{
  render() {
    const {list, toggleTodo, filter} = this.props
    const renderList = filterList(list, filter)
    return (
      <div>
        <ul>
          {
            renderList.map((v, k) => {
              console.log(v)
              return <li
                style={{textDecoration : v.isDone ? 'line-through' : 'none'}}
                onClick={()=> {toggleTodo(v.id) }}
                key={v.id}>
                {v.todo}
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    list: state.todoReducer,
    filter: state.filterReducer.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleTodo: (id) => {
      dispatch(toggle_todo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
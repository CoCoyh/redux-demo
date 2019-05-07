import React, {Component} from 'react'
import {connect} from './connect'

class Title extends Component {
  render() {
    const {title, changeTitle} = this.props
    return (
      <button onClick = {changeTitle}>
      {title} 点一下换一个title</button>
    )
  }
}

const mapStateToProps = function(state, ownProps) {
  return {
    title: state.title
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    changeTitle: () => {
      dispatch({type: "CHANGE_TITLE", newTitle: 'from mapDispatch To props'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title)
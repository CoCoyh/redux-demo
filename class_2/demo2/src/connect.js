import React, {Component} from 'react'
import PropTypes from 'prop-types'

// 获取context以及筛选
const connect = (mapStateToProps, mapDispatchToProps) => {
  return (WrappedComponent) => {
    return (
      class Connect extends Component {
        // 读取context
        static contextTypes = {
          store: PropTypes.object
        }
        constructor() {
          super()
          this.state = {
            allProps: {}
          }
        }
  
        componentWillMount() {
          const {store} = this.context;
          this.updateProps()
          // 订阅更新组件
          store.subscribe(() => this.updateProps())
        }
  
        updateProps() {
          const {store} = this.context;
          const needState = mapStateToProps ?
          mapStateToProps(store.getState(), this.props) : {}
          const needDispatch = mapDispatchToProps ?
          mapDispatchToProps(store.dispatch, this.props) : {}
  
          this.setState({
            allProps: {
              ...needState,
              ...needDispatch,
              ...this.props
            }
          })
        }
        render() {
          return (
            <WrappedComponent {...this.state.allProps}></WrappedComponent>
          )
        }
      }
    )
  }
}

// 提供Context
class Provider extends Component {
  // 参数检查
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.any
  }
  // 
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext () {
    return {
      store: this.props.store
    }
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
export {Provider, connect}
const reducer = (state, action) => {
  if (!state) {
    return {
      title: "这是reducer初始化的标题",
      content: "这是reducer初始化的内容"
    }
  }
  switch(action.type) {
    case 'CHANGE_TITLE':
      return {
        ...state,
        title: action.newTitle
      }
    default:
      return state;
  }
}

export default reducer
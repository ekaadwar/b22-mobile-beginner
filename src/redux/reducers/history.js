const initHistory = {
  test: 'ulalala',
  detail: [],
  data: [],
}

const history = (state = initHistory, action) => {
  switch (action.type) {
    case 'SET_MYTRANSACTION': {
      return {
        ...state,
        data: action.payload,
      }
    }
    case 'SET_MYTRANSACTION_DETAIL': {
      return {
        ...state,
        detail: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default history

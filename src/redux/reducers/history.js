const initHistory = {
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
    default: {
      return state
    }
  }
}

const itemState = {
  data: [],
  detail: {},
}

const items = (state = itemState, action) => {
  switch (action.type) {
    case 'ITEM_GET_LIST': {
      return {
        ...state,
        data: action.payload,
      }
    }
    case 'ITEM_GET_DETAIL': {
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

export default items

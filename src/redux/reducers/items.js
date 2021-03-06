const itemState = {
  data: [],
  pageInfo: {},
  detail: {},
  url: '',
}

const items = (state = itemState, action) => {
  switch (action.type) {
    case 'ITEM_GET_LIST': {
      return {
        ...state,
        data: action.payload.results,
        pageInfo: action.payload.pageInfo,
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

const itemState = {
  initialData: [],
  data: [],
  pageInfo: {},
  detail: {},
  url: '',
  search: null,
}

const items = (state = itemState, action) => {
  switch (action.type) {
    case 'ITEM_INITIAL_LIST': {
      return {
        ...state,
        initialData: action.payload.results,
        data: action.payload.results,
        pageInfo: action.payload.pageInfo,
      }
    }
    case 'ITEM_GET_LIST': {
      return {
        ...state,
        data: action.payload.results,
        pageInfo: action.payload.pageInfo,
      }
    }
    case 'ITEM_SEARCH_LIST': {
      console.log('reducer ITEM_SEARCH_LIST')
      console.log(action.payload)
      return {
        ...state,
        data: action.payload.data.results,
        pageInfo: action.payload.data.pageInfo,
        search: action.payload.search,
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

const itemState = {
  data: [],
};

const items = (state = itemState, action) => {
  switch (action.type) {
    case "ITEM_GET_LIST": {
      return {
        ...state,
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default items;

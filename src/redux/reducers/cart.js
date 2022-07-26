// import { vergieTomattoMix, coldBrew, pinkyPromise } from '../../assets/image'

const cartState = {
  data: [],
  total: 0,
  payment_method: '',
}

const cart = (state = cartState, action) => {
  switch (action.type) {
    case `CART_GET_LIST`: {
      return {
        ...state,
        data: action.payload,
      }
    }
    case 'CART_ADD_ITEM': {
      return {
        ...state,
        data: [...state.data, action.payload],
      }
    }
    case 'CART_CREATE_TOTAL': {
      return {
        ...state,
        total: action.payload,
      }
    }
    case 'CART_ADD_PAYMENT_METHOD': {
      return {
        ...state,
        payment_method: action.payload,
      }
    }
    case 'CART_DELETE_ITEM': {
      const data = [...state.data]
      const removed = data.splice(action.payload, 1)
      return {
        ...state,
        data,
      }
    }
    case 'CART_CLEAR': {
      return {
        ...state,
        data: [],
        total: 0,
        payment_method: '',
      }
    }
    default: {
      return state
    }
  }
}

export default cart

import { vergieTomattoMix, coldBrew, pinkyPromise } from "../../assets/image";

const cartState = {
  data: [
    {
      id: 1,
      variant: "XL",
      additional_price: 5000,
      name: "Vergie Tomatto Mix",
      image: vergieTomattoMix,
      price: "34.000",
      amount: 1,
    },
    {
      id: 2,
      variant: "XL",
      additional_price: 5000,
      name: "Cold Brew",
      image: coldBrew,
      price: "30.000",
      amount: 1,
    },
    {
      id: 3,
      variant: "XL",
      additional_price: 5000,
      name: "Pinky Promise",
      image: pinkyPromise,
      price: "25.000",
      amount: 1,
    },
    {
      id: 4,
      variant: "XL",
      additional_price: 5000,
      name: "Vergie Tomatto Mix",
      image: vergieTomattoMix,
      price: "34.000",
      amount: 1,
    },
    {
      id: 5,
      variant: "XL",
      additional_price: 5000,
      name: "Cold Brew",
      image: coldBrew,
      price: "30.000",
      amount: 1,
    },
    {
      id: 6,
      variant: "XL",
      additional_price: 5000,
      name: "Pinky Promise",
      image: pinkyPromise,
      price: "25.000",
      amount: 1,
    },
  ],
};

const cart = (state = cartState, action) => {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case "CART_DELETE_ITEM": {
      const data = [...state.data];
      const removed = data.splice(action.payload, 1);
      return {
        ...state,
        data,
      };
    }
    default: {
      return state;
    }
  }
};

export default cart;

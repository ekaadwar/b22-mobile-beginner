const profileState = {
  data: {
    display_name: "eka cool",
  },
  name: "eka",
};

const profile = (state = profileState, action) => {
  switch (action.type) {
    case "PROFILE_GET_LIST": {
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

export default profile;

// const profileState = {
//   data: {
//     display_name: "eka cool",
//   },
// };

// const profile = (state = profileState, action) => {
//   switch (action.type) {
//     case "PROFILE_GET_LIST": {
//       return {
//         ...state,
//         data: action.payload,
//       };
//     }
//     case "PROFILE_UPDATE": {
//       return {
//         ...state,
//         data: action.payload,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export default profile;

const initPhoto = {
  profile: {
    email: 'test@mail.com',
  },
}

export const profileReducer = (state = initPhoto, action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return {
        ...state,
        profile: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}

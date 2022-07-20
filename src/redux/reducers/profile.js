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

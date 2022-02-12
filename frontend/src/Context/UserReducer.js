const UserReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      }
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      }
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      }
    case "FOLLOW":
      return {
        ...state,
        user: { //grab user object
          ...state.user,
          followings: [...state.user.followings, action.payload], //change followings property, add user
        },
      }
    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (following) => following !== action.payload
          ),
        },
      }
    case "LOGOUT":
      return {
          user: localStorage.setItem("user", null),
          isFetching: false,
          error: false
      }
    default:
      return state
  }
}

export default UserReducer
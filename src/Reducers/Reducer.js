const initState = {
  loggedIn: false,
  username: "",
  email: "",
  _id: "",
  bio: "",
  avi: "",
  chatroom: null,
  lastUser: null,
};

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_LOGGEDIN":
      return {
        ...state,
        loggedIn: action.loggedIn,
      };

    case "CHANGE_USERNAME":
      return {
        ...state,
        username: action.username,
      };

    case "CHANGE_EMAIL":
      return {
        ...state,
        email: action.email,
      };

    case "CHANGE_ID":
      return {
        ...state,
        _id: action._id,
      };

    case "CHANGE_BIO":
      return {
        ...state,
        bio: action.bio,
      };

    case "CHANGE_AVI":
      return {
        ...state,
        avi: action.avi,
      };

    case "CHANGE_CHATROOM":
      return {
        ...state,
        chatroom: action.chatroom,
      };

    case "CHANGE_LASTUSER":
      return {
        ...state,
        lastUser: action.lastUser,
      };
    // you can have as many case statements as you need

    default:
      return state;
  }
};

export default Reducer;

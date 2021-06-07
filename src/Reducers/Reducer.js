const initState = {
  loggedIn: false,
  username: "",
  email: "",
  _id: "",
  bio: "",
  avi: "",
  chatroomName: "",
  chatroomId: "",
  lastUser: null,
  token: null,
  userRole: null,
  club: []

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

    case "CHANGE_CHATROOMNAME":
      return {
        ...state,
        chatroomName: action.chatroomName,
      };

    case "CHANGE_CHATROOMID":
      return {
        ...state,
        chatroomId: action.chatroomId,
      };

    case "CHANGE_LASTUSER":
      return {
        ...state,
        lastUser: action.lastUser,
      };
    case "CHANGE_USER_ALL":
      return {
        ...state,
        username: action.user.username,
        email: action.user.email,
        _id: action.user._id,
        bio: action.user.bio,
        avi: action.user.avi,
        loggedIn: action.user.loggedIn,
        club: action.user.club,
        userRole: action.user.userRole
      };
    case "CHANGE_CLUB_USERROLE":
      return {
        ...state,
        club: action.user.club,
        userRole: action.user.userRole
      };
    // you can have as many case statements as you need

    default:
      return state;
  }
};

export default Reducer;

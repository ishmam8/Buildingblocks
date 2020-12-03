const initState = {
    loggedIn: false,
    username: "",
    email: "",
    _id: "",
    bio: "",
    avi: "",
}

const User = (state = initState, action) => {
    switch (action.type) {

        case "CHANGE_LOGGEDIN":
            return {
                ...state,
                loggedIn: action.loggedIn,
            }

        case "CHANGE_USERNAME":
            return {
                ...state,
                username: action.username,
            }

        case "CHANGE_EMAIL":
            return {
                ...state,
                email: action.email,
            }

        case "CHANGE_ID":
            return {
                ...state,
                _id: action._id,
            }

        case "CHANGE_BIO":
            return {
                ...state,
                bio: action.bio,
            }

        case "CHANGE_AVI":
            console.log(action.avi);
            return {
                ...state,
                avi: action.avi,
            }

        // you can have as many case statements as you need

        default:
            return state;
    }
}

export default User;
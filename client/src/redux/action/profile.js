import { Types } from '../constant/actionTypes'

export const ActionCreators = {

    addProfile: (user) => ({ type: Types.ADD_USER, payload: { user } }),

    updateProfileImage: (image) => ({ type: Types.UPDATE_PROFILE_PICTURE, payload: { image } }),

    updateProfile: (user) => ({ type: Types.UPDATE_USER, payload: { user } }),

    formSubmissionStatus: (status) => ({ type: Types.FORM_SUBMISSION_STATUS, payload: { status } }),

    login: (user) => ({ type: Types.LOGIN, payload: { user } }),

    logout: (user) => ({ type: Types.LOG_OUT_CURRENT_USER, payload: { user }})


}

const initialState = {
    profile: null,
    formSubmitted: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOGIN:
            console.log('login', action.payload.user)
            return {
                ...state,
                profile: action.payload.user,
                formSubmitted: false //after update user formsubmission reset
            }

        case Types.LOG_OUT_CURRENT_USER:
            console.log('logout', action.payload.user)
            return {
                ...state,
                profile:null
            }

        case Types.ADD_USER:
            return {
                ...state,
                profile: action.payload.user,
                formSubmitted: false //after update user formsubmission reset
            }

        case Types.UPDATE_USER:
            return {
                ...state,
                profile: action.payload.user,
                formSubmitted: false
            }

        case Types.UPDATE_PROFILE_PICTURE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    profileImage: action.payload.image
                }
            }
        case Types.FORM_SUBMITION_STATUS:
            return {
                ...state,
                formSubmitted: action.payload.status
            }
        default:
            return state;
    }
}

export default reducer;
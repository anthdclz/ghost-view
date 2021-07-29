import AppActionTypes from "./app.types";

const INITIAL_STATE = {
    isModalOpen: false
}

const AppReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case AppActionTypes.TOGGLE_MODAL:
            return {
                ...state,
                isModalOpen: !state.isModalOpen
            };
        default:
            return state;

    }
}

export default AppReducer;
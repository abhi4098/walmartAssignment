import {
    FANCY_CAR_LIST,
    SHOW_ORDER_DELIVER_LOADING,
} from "../actions/actionTypes";

const INITIAL_STATE = {

    fancyCarListResponseData: '',
    isLoading: false
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {


        case FANCY_CAR_LIST:
            return { ...state, fancyCarListResponseData: action.payload }

        
        case SHOW_ORDER_DELIVER_LOADING:
            return { ...state, isLoading: action.payload }



        default:
            return state;

    }

};
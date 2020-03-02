import * as ActionTypes from "./ActionTypes"

export const leaders = (state={isLoading:true,errmsg:null,leaders:[]},action) =>
{
    switch (action.type)
    {
        case ActionTypes.ADD_LEADERES:
            return {isLoading:false,errmsg:null,leaders: action.payload};
        case ActionTypes.LEADERS_FAILED:
            return {errmsg: action.payload,leaders: [],isLoading: false};

    case ActionTypes.LEADERS_LOADING:
            return {errmsg: null,leaders: [],isLoading: true};

        default:return state;
    }
}
import * as ActionTypes from "./ActionTypes";

export const promotions = (state={isLoading:true,promos:[],errmsg:null},action) =>
{
    switch (action.type)
    {
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading:false,promos:action.payload,errmsg:null};

        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true,dishes: [],errmsg: null};

        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false,errmsg: action.payload};

        default:return state;
    }
}
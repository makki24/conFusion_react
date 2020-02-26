import * as ActionTypes from './ActionTypes';

export const dishes = (state={isLoading:true,errmsg:null,dishes:[]},action) =>
{
    switch (action.type)
    {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading:false,dishes:action.payload,errmsg:null};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true,dishes: [],errmsg: null};

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false,errmsg: action.payload};

        default:return state;
    }
}
import * as ActionTypes from './ActionTypes';

export const comments = (state={isLoading:true,errmsg:null,comments:[]},action) =>
{
    switch (action.type)
    {
        case ActionTypes.ADD_COMMENT: var comment=action.payload;
                                      return {...state,comments:state.comments.concat(comment)};
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading:false,comments:action.payload,errmsg:null};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false,errmsg: action.payload};

        default:return state;
    }
}
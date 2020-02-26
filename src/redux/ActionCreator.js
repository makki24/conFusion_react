import * as ActionTypes from './ActionTypes'
import {DISHES} from "../shared/dishes";

export const addComment =(dishId,rating ,author ,comment) =>
    (
        {
            type:ActionTypes.ADD_COMMENT,
            payload:{
                dishId:dishId,
                rating:rating,
                author:author,
                comment:comment
            }
        }
    );

export  const fetchDishes =()=> (dispatch) =>
{
    dispatch(dishesloading(true));

    setTimeout(()=>{dispatch(adddishes(DISHES))},2000);
}
export const dishesloading =() =>
    (
        {
            type:ActionTypes.DISHES_LOADING
        }
    );

export const adddishes =(dishes) =>
    (
        {
            type:ActionTypes.ADD_DISHES,
            payload:dishes
        }
    );

export const dishesfailed =(errmsg) =>
    (
        {
            type:ActionTypes.DISHES_FAILED,
            payload:errmsg
        }
    );
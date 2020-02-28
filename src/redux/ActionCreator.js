import * as ActionTypes from './ActionTypes'
import {baseUrl} from "../shared/baseUrl";

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

    return fetch(baseUrl + 'dishes').then(response => response.json()).then(dishes => dispatch(adddishes(dishes)));
};

export  const fetchComments =()=> (dispatch) =>
{
    return fetch(baseUrl + 'comments').then(response => response.json()).then(comments => dispatch(addComments(comments)));
};

export  const fetchPromos =()=> (dispatch) =>
{
    dispatch(dishesloading(true));

    return fetch(baseUrl + 'promotions').then(response => response.json()).then(promos => dispatch(addpromos(promos)));
};

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

export const addComments =(comment) =>
    (
        {
            type:ActionTypes.ADD_COMMENTS,
            payload:comment
        }
    );

export const commentsFailed =(errmsg) =>
    (
        {
            type:ActionTypes.COMMENTS_FAILED,
            payload:errmsg
        }
    );

export const promosloading =() =>
    (
        {
            type:ActionTypes.PROMOS_LOADING
        }
    );

export const addpromos =(promos) =>
    (
        {
            type:ActionTypes.ADD_PROMOS,
            payload:promos
        }
    );

export const promosfailed =(errmsg) =>
    (
        {
            type:ActionTypes.PROMOS_FAILED,
            payload:errmsg
        }
    );

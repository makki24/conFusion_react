import * as ActionTypes from './ActionTypes'
import {baseUrl} from "../shared/baseUrl";

export const addComment =(comment) =>
    (
        {
            type:ActionTypes.ADD_COMMENT,
            payload:{
                comment:comment
            }
        }
    );

export const postComment =(dishId,rating,author,comment) => (dispatch) =>
{
    var newComment={
        dishId: dishId,
        rating: rating,
        author: author,
        comment:comment
    }
    newComment.date=new Date().toISOString();

    return fetch(baseUrl + 'comments',{
        method:"POST",
        body:JSON.stringify(newComment),
        headers:{
            'Content-Type' :'application/json'
        },
        credentials:'same-origin'
    }).then(response => {
            if(response.ok)
                return response
            else
            {
                var err= new Error('Error'+ response.status+ response.statusText);
                err.response=response;
                throw err;
            }
        },err =>{
            var error=new Error(err.message);
            throw error;
        }).then(response => response.json())
        .then(comment => dispatch(addComment(comment)))
        .catch((err) => alert("Comments Failed adding "+err.message));
}
export  const fetchDishes =()=> (dispatch) =>
{
    dispatch(dishesloading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if(response.ok)
                return response
            else
            {
                var err= new Error('Error'+ response.status+ response.statusText);
                err.response=response;
                throw err;
            }
        },err =>{
            var error=new Error(err.message);
            throw error;
        })
        .then(response => response.json()).then(dishes => dispatch(adddishes(dishes)))
        .catch(err=>dispatch(dishesfailed(err.message)));
};

export  const fetchComments =()=> (dispatch) =>
{
    return fetch(baseUrl + 'comments')
         .then(response => {
            if(response.ok)
                return response
            else
            {
                var err= new Error('Error'+ response.status+ response.statusText);
                err.response=response;
                throw err;
            }
        },err =>{
            var error=new Error(err.message);
            throw error;
        }).then(response => response.json()).then(comments => dispatch(addComments(comments)))
        .catch(err=>dispatch(commentsFailed(err.message)));
};

export  const fetchPromos =()=> (dispatch) =>
{
    dispatch(dishesloading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if(response.ok)
                return response
            else
            {
                var err= new Error('Error'+ response.status+ response.statusText);
                err.response=response;
                throw err;
            }
        },err =>{
            var error=new Error(err.message);
            throw error;
        }).then(response => response.json()).then(promos => dispatch(addpromos(promos)))
    .catch(err=>dispatch(promosfailed(err.message)));
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
